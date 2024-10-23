import { format } from 'date-fns';
import { FC } from "preact/compat";
import { Button } from 'primereact/button';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Tooltip } from 'primereact/tooltip';
import { useState } from "react";
import { Archive, ArrowDownCircle, ArrowUp, EyeOff, FileText, Film, Image, Info, MoreVertical, Search, Upload } from "react-feather";
import SystemButton from '../System/Button';
import Container from "../System/Container";
import { assetPackages, AssetType } from "./downloads";
import TutorialOverlay from '../System/TutorialOverlay';
import { PageRoutes } from '../../lib/store/router.store';

export const assetTypeIcons = {
    [AssetType.PDF]: <FileText size={18} />,
    [AssetType.JPG]: <Image size={18} />,
    [AssetType.PNG]: <Image size={18} />,
    [AssetType.MP4]: <Film size={18} />,
}

const Downloads: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const [chatMessages, setChatMessages] = useState<{ [key: number]: string[] }>({});
    const [newMessage, setNewMessage] = useState<{ [key: number]: string }>({});

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSendMessage = (index: number) => {
        if (newMessage[index]?.trim()) {
            setChatMessages((prevMessages) => ({
                ...prevMessages,
                [index]: [...(prevMessages[index] || []), newMessage[index]],
            }));
            setNewMessage((prev) => ({ ...prev, [index]: "" }));
        }
    };

    const getDownloadChartData = (downloads) => {
        // Group and count downloads by date
        const downloadsByDate = downloads.reduce((acc, download) => {
            const downloadDate = format(download.downloadedAt, 'yyyy-MM-dd');
            if (!acc[downloadDate]) acc[downloadDate] = 0;
            acc[downloadDate] += 1;
            return acc;
        }, {});

        return Object.entries(downloadsByDate).map(([date, count]) => ({
            date,
            downloads: count,
        }));
    };

    return (
        <div className="grid gap-4">
            <Container>
                <div className="flex gap-4 justify-between items-center">
                    <h1 className="text-2xl font-semibold">Asset Management</h1>
                    <div className="flex gap-2 items-center">
                        <SystemButton style="primary-negative">
                            Neues Bundle erstellen
                        </SystemButton>
                    </div>
                </div>
            </Container>
            <Container title="Übersicht der Downloads">
                <div className="mb-4">
                    <IconField iconPosition="left">
                        <InputIcon className="-translate-y-[3px] text-gray-400">
                            <Search size={22} />
                        </InputIcon>
                        <InputText
                            value=""
                            placeholder="Downloads durchsuchen ..."
                            className="w-full p-3 pl-11 bg-gray-100/70 border focus:bg-white"
                        />
                    </IconField>
                </div>
                <div className="grid gap-3">
                    {assetPackages.map((assetPackage, index) => (
                        <div key={index} className={`${activeIndex === index ? 'border-gray-400' : ''} border rounded-lg overflow-hidden group hover:border-gray-400 transition`}>
                            <div className={`${activeIndex === index ? " bg-gray-600" : ""} w-full px-4 focus:outline-none flex justify-between items-center`}>
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="py-4 w-[60%] text-left flex items-center justify-start gap-2.5"
                                >
                                    {activeIndex !== index &&
                                        <div className="flex items-center text-gray-400 group-hover:text-gray-500">
                                            <ArrowDownCircle size={18} />
                                        </div>
                                    }
                                    <span className={`${activeIndex === index ? "text-white" : "text-gray-600"} font-medium`}>{assetPackage.title}</span>
                                </button>
                                <div className="text-xs text-gray-400 tracking-wide">
                                    {activeIndex === index ?
                                        <Button rounded
                                            severity="secondary"
                                            className="text-gray-600 p-1">
                                            <MoreVertical size={20} />
                                        </Button>
                                        :
                                        <p class="text-xs text-gray-400 tracking-wide flex gap-2">
                                            <span>Dateien: {assetPackage.items.length}</span>
                                            <span> | </span>
                                            <span>Downloads: {assetPackage.downloads.length}</span>
                                            <span> | </span>
                                            <span className="">Geändert: {format(assetPackage.changedAt, 'dd.MM.yyyy')}</span>
                                        </p>
                                    }
                                </div>
                            </div>

                            {activeIndex === index &&
                                <div class="p-4 pt-0 bg-white mt-4">
                                    <div className="flex justify-between items-end mb-2 border-b pb-1.5">
                                        <h4 class="uppercase text-xs font-medium tracking-wider mb-0.5">
                                            Inhalte
                                        </h4>
                                    </div>
                                    <ul>
                                        {assetPackage.items.map((item, itemIndex) => (
                                            <li className="flex items-center justify-between even:bg-gray-50 rounded p-2" key={itemIndex}>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-400">{assetTypeIcons[item.type]}</span>
                                                    <span className="tracking-wide text-sm text-gray-600">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <div className="flex w-[35%] justify-end">
                                                    <div className=" tracking-wide flex gap-2 items-center text-gray-400 text-xs">
                                                        <div>{item.size}</div>
                                                        <div>
                                                            <Button rounded
                                                                severity="secondary"
                                                                className="text-gray-400 p-1">
                                                                <MoreVertical size={18} />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <Tooltip position="left" target=".custom-tooltip-btn">
                                                            <div className="flex items-center gap-2">
                                                                <Info size={16} />
                                                                <p className="text-xs">Diese Funktion ist in der Demo deaktiviert</p>
                                                            </div>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <p class="text-xs text-gray-400 tracking-wide mt-3 mb-7">
                                        <span>Dateien gesamt: {assetPackage.items.length}</span>
                                        <span> | </span>
                                        <span>Größe gesamt: {assetPackage.size}</span>
                                        <span> | </span>
                                        <span className="">Geändert: {format(assetPackage.changedAt, 'dd.MM.yyyy')}</span>
                                    </p>

                                    <h4 className="uppercase text-xs font-medium tracking-wider mb-4 border-b pb-1.5">
                                        Aktuelle Downloads
                                    </h4>
                                    <ul class="list-none space-y-2">
                                        {assetPackage.downloads.map((download, downloadIndex) => (
                                            <li key={downloadIndex} class="flex items-center even:bg-gray-50 rounded px-2 p-1 space-x-2 justify-between">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={download.userImage}
                                                        alt={download.username}
                                                        class="w-7 h-7 rounded-full border border-gray-200"
                                                    />
                                                    <span className="text-sm text-gray-600">{download.username}</span>
                                                </div>
                                                <div className="flex w-[30%] justify-end pr-2">
                                                    <div className="tracking-wide flex gap-8 items-center text-gray-400 text-xs">
                                                        <div className="">
                                                            <span className="inline-block mr-2">
                                                                {download.downloadedItems} / {assetPackage.items.length}
                                                            </span>
                                                            <span>Dateien</span>
                                                        </div>
                                                        <div>Heruntergeladen: {format(download.downloadedAt, 'dd.MM.yyyy')}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-xs text-gray-400 tracking-wide mt-3 ">
                                        Downloads gesamt: {assetPackage.downloads.length}
                                    </div>

                                    {/* New Chat Section */}
                                    {/*                                     
                                    <h4 className="uppercase text-xs font-medium tracking-wider mb-2 border-b pb-1.5 mt-5">
                                        Nachrichten
                                    </h4>
                                    <ul className="list-none space-y-1 mb-2">
                                        {chatMessages[index]?.map((message, messageIndex) => (
                                            <li key={messageIndex} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-100 p-2 rounded">
                                                <span className="text-xs flex items-center gap-2">
                                                    <span className="w-7 h-7 bg-white font-bold rounded-full block border flex items-center justify-center">N1</span>
                                                </span>
                                                <span>{message}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-2 mt-4">
                                        <InputText
                                            value={newMessage[index] || ""}
                                            onChange={(e) => setNewMessage((prev) => ({
                                                ...prev,
                                                [index]: e.target.value,
                                            }))}
                                            placeholder="Nachricht eingeben ..."
                                            className="w-full p-2 border rounded"
                                        />
                                        <button
                                            onClick={() => handleSendMessage(index)}
                                            className="py-2 px-4 text-gray-500 text-xs bg-gray-100 rounded"
                                        ><Send size={18} /></button>
                                    </div>
                                    */}

                                    <div className="flex gap-3 mt-7">
                                        <SystemButton size='small' style='primary-negative'>
                                            <Upload size={16} />
                                            Dateien hinzufügen
                                        </SystemButton>
                                        <SystemButton size='small' style='primary-negative'>
                                            <EyeOff size={16} />
                                            Für Nutzer ausblenden
                                        </SystemButton>
                                        <SystemButton size='small' style='primary-negative'>
                                            <Archive size={16} />
                                            Archivieren
                                        </SystemButton>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </Container >

            <TutorialOverlay
                title='Behalten Sie den Überblick darüber, wer Ihre Daten heruntergeladen hat, und verwalten Sie die Berechtigungen effektiv!'
                description='Nutzen Sie die klaren Verwaltungsoptionen, um den Zugriff auf Ihre Daten zu steuern und wichtige Berechtigungen anzupassen. So behalten Sie die Kontrolle über Ihre Informationen und deren Nutzung!'
                focusPoint={{ size: 150, left: 420, top: 800 }}
                forPage={PageRoutes.DOWNLOAD_OVERVIEW}
            />
        </div >
    );
};

export default Downloads;
