import React, {useState, useContext, useEffect} from 'react';

const FileContext = React.createContext();

export function useFileContext() {
    return useContext(FileContext);
}

export function FileContextProvider({children}) {
    const [fileUploaded, setFileUploaded] = useState(null);
    const [chart, setChart] = useState(null);
    const [imageReceived, setImageReceived] = useState(null);
    const [f, setF] = useState(false);

    useEffect((e) => {
        console.log(fileUploaded);        
    }, [fileUploaded]);

    useEffect((e) => {
        console.log(chart);        
    }, [chart]);

    const value = {
        fileUploaded,
        setFileUploaded,
        chart,
        setChart,
        imageReceived,
        setImageReceived
    };

    return <FileContext.Provider value={value}>
        {children}
    </FileContext.Provider>
}