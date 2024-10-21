import { format } from 'date-fns';
import { FC } from "preact/compat";
import { Button } from 'primereact/button';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Tooltip } from 'primereact/tooltip';
import { useState } from "react";
import { ArrowRight, FileText, Film, Image, Info, MoreVertical, Search, Trash2 } from "react-feather";
import SystemButton from '../System/Button';
import Container from "../System/Container";
import { assetPackages, AssetType } from "./downloads";

export const assetTypeIcons = {
    [AssetType.PDF]: <FileText size={18} />,
    [AssetType.JPG]: <Image size={18} />,
    [AssetType.PNG]: <Image size={18} />,
    [AssetType.MP4]: <Film size={18} />,
}
const Downloads: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
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
                <div class="grid _grid-cols-2 gap-4">
                    {assetPackages.map((assetPackage, index) => (
                        <div key={index} class="border rounded-lg p-1">
                            <div class="w-full px-4 focus:outline-none flex justify-between items-center mb-2">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="py-4 w-[60%] text-left"
                                >
                                    <span className="font-semibold text-gray-700">{assetPackage.title}</span>
                                </button>
                                <div className="text-xs text-gray-400 tracking-wide">
                                    <div className="flex items-center">
                                        <Button rounded
                                            severity="secondary"
                                            className="text-gray-400 p-1">
                                            <MoreVertical size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 pt-0 bg-white">
                                <div className="flex justify-between items-end mb-2 border-b pb-1.5">
                                    <h4 class="uppercase text-xs font-semibold tracking-wide mb-0.5">
                                        Inhalte
                                    </h4>
                                </div>
                                <ul>
                                    {assetPackage.items.map((item, itemIndex) => (
                                        <li className="flex items-center justify-between even:bg-gray-50 rounded p-2" key={itemIndex}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-400">{assetTypeIcons[item.type]}</span>
                                                <span className="tracking-wide text-sm text-gray-60">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="flex w-[35%] justify-between">
                                                <div className=" tracking-wide flex gap-2 items-center text-gray-400 text-xs">
                                                    <div className="w-14">Typ: {item.type}</div>
                                                    <span>|</span>
                                                    <div>Größe: {item.size}</div>
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
                                <p class="text-xs text-gray-400 tracking-wide mt-3 mb-6">
                                    <span>Dateien gesamt: {assetPackage.items.length}</span>
                                    <span> | </span>
                                    <span>Größe gesamt: {assetPackage.size}</span>
                                    <span> | </span>
                                    <span className="">Geändert: {format(assetPackage.changedAt, 'dd.MM.yyyy')}</span>
                                </p>
                                <h4 className="uppercase text-xs font-semibold tracking-wide mb-4 border-b pb-1.5">
                                    Aktuelle Downloads
                                </h4>
                                <ul class="list-none space-y-2">
                                    {assetPackage.downloads.map((download, downloadIndex) => (
                                        <li key={downloadIndex} class="flex items-center even:bg-gray-50 rounded px-2 p-1 space-x-2 justify-between">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={download.userImage}
                                                    alt={download.username}
                                                    class="w-7 h-7 rounded-full border border-primary-200"
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
                                    Downloads: {assetPackage.downloads.length}
                                </div>

                                {/* New Chat Section */}
                                <h4 className="uppercase text-xs font-semibold tracking-wide mb-2 border-b pb-1.5 mt-4">
                                    Chat
                                </h4>
                                <ul className="list-none space-y-1 mb-2">
                                    {chatMessages[index]?.map((message, messageIndex) => (
                                        <li key={messageIndex} className="text-sm text-gray-600 bg-gray-100 p-2 rounded">
                                            {message}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex gap-2 mt-2">
                                    <InputText
                                        value={newMessage[index] || ""}
                                        onChange={(e) => setNewMessage((prev) => ({
                                            ...prev,
                                            [index]: e.target.value,
                                        }))}
                                        placeholder="Nachricht eingeben ..."
                                        className="w-full p-2 border rounded"
                                    />
                                    <Button
                                        label="Senden"
                                        onClick={() => handleSendMessage(index)}
                                        className="p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Downloads;
