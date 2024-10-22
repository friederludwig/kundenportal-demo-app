import { FC, useEffect } from 'preact/compat';
import { Tooltip } from 'primereact/tooltip';
import { useDropzone } from 'react-dropzone';
import { Info, UploadCloud } from 'react-feather';

interface FileDropzoneProps {
    onFileUpload?: (files: File[]) => void;
}

const FileDropzone: FC<FileDropzoneProps> = ({ onFileUpload }) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            onFileUpload(acceptedFiles as File[]);
        }
    }, [acceptedFiles, onFileUpload]);

    return (
        <>
            <div className="custom-tooltip-area cursor-not-allowed group hover:border-primary-200 transition flex items-center justify-center w-full border-2 rounded-md border-gray-200 border-dashed">
                <input />
                <div className="flex items-center justify-center gap-6 p-7 w-full">
                    <span className="text-gray-200 group-hover:text-primary-200 transition"><UploadCloud size={60} /></span>
                    <p className="text-gray-400 text-sm">Dateien hochladen oder klicken zum auswählen.</p>
                </div>
            </div>
            <Tooltip position="top" target=".custom-tooltip-area">
                <div className="flex items-center gap-2">
                    <Info size={16} />
                    <p className="text-xs">Diese Funktion ist in der Demo deaktiviert</p>
                </div>
            </Tooltip>
        </>
    )

    return (
        <div className="flex items-center justify-center w-full border-2 rounded-md border-gray-200 border-dashed">
            <div {...getRootProps({ className: 'dropzone w-full' })}>
                <input {...getInputProps()} />
                <div className="flex items-center justify-center gap-6 p-7 cursor-pointer w-full">
                    <span className="text-gray-200"><UploadCloud size={60} /></span>
                    <p className="text-gray-300">Dateien hochladen oder klicken zum auswählen.</p>
                </div>
            </div>
        </div>
    );
};

export default FileDropzone;
