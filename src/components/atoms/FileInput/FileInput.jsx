const FileInput = ( { file, setFile}) => {
    return (
        <input
        type="file"
        file={file}
        setFile={setFile}
        className="FileInput-class"
        />
    )
}
export default FileInput;