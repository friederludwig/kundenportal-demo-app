import { format } from "date-fns";
import { FC } from "preact/compat";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { useState } from "react";
import {
  Archive,
  ArrowDownCircle,
  Eye,
  EyeOff,
  FileText,
  Film,
  Image,
  Info,
  MoreVertical,
  Search,
  Upload
} from "react-feather";
import { PageRoutes } from "../../lib/store/router.store";
import SystemButton from "../System/Button";
import Container from "../System/Container";
import TutorialOverlay from "../System/TutorialOverlay";
import { AssetPackage, assetPackages, AssetType } from "./downloads";

export const assetTypeIcons = {
  [AssetType.PDF]: <FileText size={18} />,
  [AssetType.JPG]: <Image size={18} />,
  [AssetType.PNG]: <Image size={18} />,
  [AssetType.MP4]: <Film size={18} />,
};

const Downloads: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const [chatMessages, setChatMessages] = useState<{ [key: number]: string[] }>({});
  const [newMessage, setNewMessage] = useState<{ [key: number]: string }>({});
  const [packages, setPackages] = useState<AssetPackage[] | null>(assetPackages);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchQueryChange = (query: string) => {
    const filtered = assetPackages.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setPackages(filtered);
    setSearchQuery(query)
  }

  return (
    <div className="grid gap-4">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Asset Management</h1>
          <div className="flex items-center gap-2">
            <SystemButton style="primary-negative">Neues Bundle erstellen</SystemButton>
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
              value={searchQuery}
              placeholder="Downloads durchsuchen ..."
              className="w-full p-3 border pl-11 bg-gray-100/70 focus:bg-white"
              onChange={(e) => handleSearchQueryChange(e.target.value)}
            />
          </IconField>
        </div>

        <div className="grid gap-3">
          {packages.map((assetPackage, index) => (
            <div
              key={index}
              className={`${activeIndex === index ? "border-gray-400" : ""
                } border rounded-lg overflow-hidden group hover:border-gray-400 transition`}
            >
              <div
                className={`${activeIndex === index ? " bg-gray-600" : ""
                  } w-full px-4 focus:outline-none flex justify-between items-center`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="py-4 w-[60%] text-left flex items-center justify-start gap-2.5"
                >
                  {activeIndex !== index && (
                    <div className="flex items-center text-gray-400 group-hover:text-gray-500">
                      <ArrowDownCircle size={18} />
                    </div>
                  )}
                  <span
                    className={`${activeIndex === index ? "text-white" : "text-gray-600"
                      } font-medium`}
                  >
                    {assetPackage.title}
                  </span>
                </button>
                <div className="text-xs tracking-wide text-gray-400">
                  {activeIndex === index ? (
                    <Button rounded severity="secondary" className="p-1 text-gray-600">
                      <MoreVertical size={20} />
                    </Button>
                  ) : (
                    <p class="text-xs text-gray-400 tracking-wide flex gap-2">
                      <span>Dateien: {assetPackage.items.length}</span>
                      <span> | </span>
                      <span>Downloads: {assetPackage.downloads.length}</span>
                      <span> | </span>
                      <span className="">
                        Geändert: {format(assetPackage.changedAt, "dd.MM.yyyy")}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {activeIndex === index && (
                <div class="p-4 pt-0 bg-white mt-4">
                  <div className="flex justify-between items-end mb-2 border-b pb-1.5">
                    <h4 class="uppercase text-xs font-medium tracking-wider mb-0.5">
                      Inhalte
                    </h4>
                  </div>
                  <ul>
                    {assetPackage.items.map((item, itemIndex) => (
                      <li
                        className="flex items-center justify-between p-2 rounded even:bg-gray-50"
                        key={itemIndex}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">{assetTypeIcons[item.type]}</span>
                          <span className="text-sm tracking-wide text-gray-600">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex w-[35%] justify-end">
                          <div className="flex items-center gap-2 text-xs tracking-wide text-gray-400 ">
                            <div>{item.size}</div>
                            <div>
                              <Button
                                rounded
                                severity="secondary"
                                className="p-1 text-gray-400"
                              >
                                <MoreVertical size={18} />
                              </Button>
                            </div>
                          </div>
                          <div className="">
                            <Tooltip position="left" target=".custom-tooltip-btn">
                              <div className="flex items-center gap-2">
                                <Info size={16} />
                                <p className="text-xs">
                                  Diese Funktion ist in der Demo deaktiviert
                                </p>
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
                    <span className="">
                      Geändert: {format(assetPackage.changedAt, "dd.MM.yyyy")}
                    </span>
                  </p>

                  <h4 className="uppercase text-xs font-medium tracking-wider mb-4 border-b pb-1.5">
                    Aktuelle Downloads
                  </h4>
                  <ul class="list-none space-y-2">
                    {assetPackage.downloads.map((download, downloadIndex) => (
                      <li
                        key={downloadIndex}
                        class="flex items-center even:bg-gray-50 rounded px-2 p-1 space-x-2 justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={download.userImage}
                            alt={download.username}
                            class="w-7 h-7 rounded-full border border-gray-200"
                          />
                          <span className="text-sm text-gray-600">{download.username}</span>
                        </div>
                        <div className="flex w-[30%] justify-end pr-2">
                          <div className="flex items-center gap-8 text-xs tracking-wide text-gray-400">
                            <div className="">
                              <span className="inline-block mr-2">
                                {download.downloadedItems} / {assetPackage.items.length}
                              </span>
                              <span>Dateien</span>
                            </div>
                            <div>
                              Heruntergeladen: {format(download.downloadedAt, "dd.MM.yyyy")}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-xs tracking-wide text-gray-400 ">
                    Downloads gesamt: {assetPackage.downloads.length}
                  </div>

                  {/* New Chat Section */}
                  {/*                                     
                                    <h4 className="uppercase text-xs font-medium tracking-wider mb-2 border-b pb-1.5 mt-5">
                                        Nachrichten
                                    </h4>
                                    <ul className="mb-2 space-y-1 list-none">
                                        {chatMessages[index]?.map((message, messageIndex) => (
                                            <li key={messageIndex} className="flex items-center gap-3 p-2 text-sm text-gray-600 bg-gray-100 rounded">
                                                <span className="flex items-center gap-2 text-xs">
                                                    <span className="flex items-center justify-center block font-bold bg-white border rounded-full w-7 h-7">N1</span>
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
                                            className="px-4 py-2 text-xs text-gray-500 bg-gray-100 rounded"
                                        ><Send size={18} /></button>
                                    </div>
                                    */}

                  <div className="flex gap-3 mt-7">
                    <SystemButton size="small" style="primary-negative">
                      <Upload size={16} />
                      Dateien hinzufügen
                    </SystemButton>
                    <SystemButton size="small" style="primary-negative">
                      <EyeOff size={16} />
                      Für Nutzer ausblenden
                    </SystemButton>
                    <SystemButton size="small" style="primary-negative">
                      <Archive size={16} />
                      Archivieren
                    </SystemButton>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>

      <TutorialOverlay
        title="Behalten Sie den Überblick Ihrer Daten"
        description="Nutzen Sie die klaren Verwaltungsoptionen, um den Zugriff auf Ihre Daten zu steuern und wichtige Berechtigungen anzupassen."
        clipPath="inset(425px 20px 0 280px round 15px)"
        clipHeight="1000px"
        clipWidth="1555px"
        tooltip={{ top: "13rem", left: "17rem", icon: <Eye size={20} /> }}
        forPage={PageRoutes.DOWNLOAD_OVERVIEW}
      />
    </div>
  );
};

export default Downloads;
