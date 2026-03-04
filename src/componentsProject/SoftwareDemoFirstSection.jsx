import { UploadIcon } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const SoftwareDemoFirstSection = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [resultFiles, setResultFiles] = useState([]);

    const [uploadMode, setUploadMode] = useState('single');
    // const [loading, setLoading] = useState(false);
    const [detectionResults, setDetectionResults] = useState();
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const [email, setEmail] = useState('');

    const handleFileChange = (e) => {
        setDetectionResults();
        const files = Array.from(e.target.files);
        setSelectedFiles(uploadMode === 'single' ? files.slice(0, 1) : files);
    };

    const handleUploadModeChange = (mode) => {
        setUploadMode(mode);
        setSelectedFiles([]); // Reset selected files when upload mode changes
        setDetectionResults();
    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    function urltoFile(url, filename, mimeType) {
        if (url.startsWith('data:')) {
            var arr = url.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[arr.length - 1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            var file = new File([u8arr], filename, { type: mime || mimeType });
            return Promise.resolve(file);
        }
        return fetch(url)
            .then(res => res.arrayBuffer())
            .then(buf => new File([buf], filename, { type: mimeType }));
    }

    const handleStartDetection = async () => {
        // setLoading(true);
        setOpen(true);
        const file = await toBase64(selectedFiles[0]);
        let data = JSON.stringify({ "file": file.toString() })
        if (uploadMode === 'single') {

            axios.post('https://backend.srv560349.hstgr.cloud/infer_image',
                data,
                {
                    headers: {
                        'Accept': 'application/json, text/plain, /',
                        'Content-Type': 'application/json'
                    },
                }
            )
                .then(response => {
                    let resp = response.data;
                    const img = "data:image/png;charset=utf-8;base64," + resp.result_image
                    setResultFiles([img])
                    urltoFile(img, 'image.png', 'image/png')
                        .then(function (file) {
                            setSelectedFiles([file]);
                        });
                    setOpen(false);
                    setDetectionResults(resp.total_objects);
                })
                .catch(error => {
                    setOpen(false);
                    console.error(error);
                });

        }

        // setTimeout(() => {
        //     setLoading(false);
        //     setDetectionResults([
        //         { detected: 'Example Item 1', detection: 'Value 1' },
        //         { detected: 'Example Item 2', detection: 'Value 2' }
        //     ]);
        // }, 3000);
    };

    const toggleDemoModal = () => {
        setIsDemoOpen(!isDemoOpen);
    };

    const handleCsvFileDownload = () => {
        var csv = [];
        var rows = document.querySelectorAll("#table-data tr");
        if (rows.length == 2) {
            return alert("Please validate your image first");
        }
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");

            for (var j = 0; j < cols.length; j++) {
                row.push(cols[j].innerText);
            }

            csv.push(row.join(","));
        }

        // Download CSV file
        var csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
        var downloadLink = document.createElement("a");
        downloadLink.download = "data.csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };

    function isValidEmail(mail) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(mail);
    }

    const handleSendEmail = async () => {

        if (isValidEmail(email)) {
            setOpen(true);
            if (uploadMode === 'single') {
                var rows = document.querySelectorAll("#table-data tr");
                var csv = [];
                console.log("rows: ", rows)
                for (var i = 0; i < rows.length; i++) {
                    var row = [], cols = rows[i].querySelectorAll("td, th");

                    for (var j = 0; j < cols.length; j++) {
                        row.push(cols[j].innerText);
                    }

                    csv.push(row.join(","));
                }
                var csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
                var reader = new FileReader();
                reader.readAsDataURL(csvFile);
                reader.onload = function () {
                    var base64data = reader.result.split(',')[1]; // Get the base64 part of the data URL
                    let data = JSON.stringify({ "email": email, "file": base64data.toString(), "img": resultFiles[0] })
                    axios.post('https://backend.srv560349.hstgr.cloud/send_email',
                        data,
                        {
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                        }
                    )
                        .then(response => {
                            setOpen(false);
                            alert(response.data.done);
                            setIsEmailModalOpen(false);
                        })
                        .catch(error => {
                            setOpen(false);
                            console.error(error);
                            setIsEmailModalOpen(false);
                        });

                }
            }

        }

        else {
            alert("Please enter correct email address.")
        }

    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className='flex flex-col justify-center items-center py-10 gap-6 bg-neutralSilver px-14'>

                <div>
                    <button
                        onClick={toggleDemoModal}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
                    >
                        See Demo
                    </button>
                </div>

                {isDemoOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative">

                            <div className='flex relative justify-end pt-5 mt-5'>
                                <button
                                    onClick={toggleDemoModal}
                                    className="absolute top-[-24px] bg-red-500 w-10 text-white hover:bg-red-700"
                                >
                                    &times;
                                </button>
                            </div>

                            <video
                                src="path_to_your_demo_video.mp4"
                                controls
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                )}

                <div className="flex gap-4 mb-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="uploadMode"
                            value="single"
                            checked={uploadMode === 'single'}
                            onChange={() => handleUploadModeChange('single')}
                            className="mr-2"
                        />
                        Single
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="uploadMode"
                            value="multiple"
                            checked={uploadMode === 'multiple'}
                            onChange={() => handleUploadModeChange('multiple')}
                            className="mr-2"
                        />
                        Multiple
                    </label>
                </div>

                <div className='w-full max-w-md border-2 border-dashed border-gray-400 p-6 rounded-lg bg-white cursor-pointer hover:border-blue-500'>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, video/mp4"
                        multiple={uploadMode === 'multiple'}
                        className="hidden"
                        id="fileInput"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="fileInput" className="flex flex-col items-center justify-center h-32 text-gray-600 duration-300 hover:text-brandPrimary cursor-pointer">
                        <UploadIcon className='w-10 h-10' />
                        <span className="mt-2">Click to upload images or videos</span>
                    </label>
                </div>

                <div className="w-full flex flex-wrap gap-4 mt-4">
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="relative w-full flex justify-center">
                            {file.type.startsWith('image/') ? (
                                <div className='bg-white rounded-xl'>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`preview-${index}`}
                                        className={uploadMode === 'single' ? 'h-full w-full rounded-lg' : 'rounded-lg'}
                                    />
                                </div>
                            ) : (
                                <video
                                    src={URL.createObjectURL(file)}
                                    controls
                                    className={uploadMode === 'single' ? 'w-full h-auto rounded-lg' : 'rounded-lg'}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {selectedFiles.length > 0 && !open && (
                    <button
                        onClick={handleStartDetection}
                        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-44"
                    >
                        Start Detection
                    </button>
                )}

                {/* OLD LOADER */}

                {/* {loading && (
                    <div className="mt-6 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>
                )} */}

                {detectionResults && (
                    <div className="w-[100%] sm:w-[75%] mt-6 bg-white p-4 rounded-lg shadow-md">
                        <div className="w-full overflow-x-auto">
                            <table id="table-data" className="min-w-[400px] w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2 text-left">Object</th>
                                        <th className="py-2 text-left">Object Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(detectionResults).map((result, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="py-2">{result}</td>
                                                <td className="py-2">{detectionResults[result]}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                onClick={handleCsvFileDownload}
                            >
                                Export to CSV
                            </button>
                            <button
                                onClick={() => setIsEmailModalOpen(true)}
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {isEmailModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
                        <div className='flex relative justify-end pt-5 mt-5'>
                            <button
                                onClick={() => setIsEmailModalOpen(false)}
                                className="absolute top-[-24px] bg-red-500 w-10 text-white hover:bg-red-700"
                            >
                                &times;
                            </button>
                        </div>
                        <h2 className="text-lg font-semibold mb-4">Send Detection Results via Email</h2>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                        />
                        <button
                            onClick={handleSendEmail}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Send Email
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SoftwareDemoFirstSection;
