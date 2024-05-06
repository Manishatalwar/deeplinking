// // pages/index.js
 "use client";
// import { useState,useEffect } from 'react';

// export default function Home() {
//   const [appInstalled, setAppInstalled] = useState(false);
//   const [appOpened, setAppOpened] = useState(false);
//   const appPackageName = 'com.thebrassstargroup.rtduserapp'; // Package name of the app
//   const appScheme = `intent://${appPackageName}/#Intent;scheme=${appPackageName};package=${appPackageName};end`;
//   const appStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageName}`;

//   useEffect(() => {
//     // Check if the app is installed
//     const checkAppInstalled = () => {
//       if (typeof window !== 'undefined' && 'Intent' in window) {
//         const intent = new Intent('android.intent.action.VIEW', appScheme);
//         navigator.startActivity(intent).then(() => {
//           setAppInstalled(true);
//         }).catch(() => {
//           setAppInstalled(false);
//         });
//       }
//     };

//     checkAppInstalled();
//   }, []);

//   const openApp = () => {
//     if (appInstalled) {
//       // Open the app
//       const appWindow = window.open(appScheme, '_blank');
//       if (!appWindow || appWindow.closed || typeof appWindow.closed === 'undefined') {
//         // If window.open fails, set appOpened to true
//         setAppOpened(true);
//       }
//     } else {
//       // Redirect to the Play Store
    
//       window.open(appStoreUrl, '_blank');
      
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
//       <div className="text-center border p-8 rounded-lg">
//         <div className="flex flex-col items-center mb-6">
//           <h1 className="text-5xl font-semibold mb-4">Safety</h1>
//           <img src="/warning.png" alt="Warning Icon" className="w-22 h-16 mb-2" />
//         </div>

//         <p className="text-[25px] mb-8 font-semibold">If you are concerned about your safety, contact the transit police.</p>

//         <div className="flex flex-col gap-4">
//           <button className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center" >
//             <div className="flex items-center mb-2">
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
//                 <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
//               </svg>
//               <span className="ml-2">Click to Call by Phone</span>
//             </div>
//             <p className="text-gray-600">303.434.1900</p>
//           </button>

//           <button className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center">
//             <div className="flex items-center mb-2">
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
//                 <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/>
//               </svg>
//               <span className="ml-2">Click to Send a Text</span>
//             </div>
//             <p className="text-gray-600">303.434.1900</p>
//           </button>

//           <button onClick={openApp} className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center">
//             <div className="flex items-center mb-2">
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
//                 <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
//               </svg>
//               <span className="ml-2">Click to File a Report</span>
//             </div>
//             <p className="text-gray-600">Open in Transit Watch</p>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
import { useState, useEffect } from 'react';

export default function Home() {
  const [appInstalled, setAppInstalled] = useState(false);
  const [appOpened, setAppOpened] = useState(false);
  const appPackageName = 'com.thebrassstargroup.rtduserapp'; // Package name of the app
  const appScheme = `intent://${appPackageName}/#Intent;scheme=${appPackageName};package=${appPackageName};end`;
  const appStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageName}`;

  useEffect(() => {
    // Check if the app is installed
    const checkAppInstalled = () => {
      // Check if the 'Intent' class is available (only available in Android environment)
      if (typeof window !== 'undefined' && 'Intent' in window) {
        setAppInstalled(true);
      } else {
        setAppInstalled(false);
      }
    };

    checkAppInstalled();
  }, []);

  const openApp = () => {
    if (appInstalled) {
      // Open the app using the custom URI scheme
      window.location.href = appScheme;
    } else {
      // Redirect to the Play Store
      window.open(appStoreUrl, '_blank');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center border p-8 rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl font-semibold mb-4">Safety</h1>
          <img src="/warning.png" alt="Warning Icon" className="w-22 h-16 mb-2" />
        </div>

        <p className="text-[25px] mb-8 font-semibold">If you are concerned about your safety, contact the transit police.</p>

        <div className="flex flex-col gap-4">
          <button className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center" >
            <div className="flex items-center mb-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
              </svg>
              <span className="ml-2">Click to Call by Phone</span>
            </div>
            <p className="text-gray-600">303.434.1900</p>
          </button>

          <button className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center">
            <div className="flex items-center mb-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007"/>
              </svg>
              <span className="ml-2">Click to Send a Text</span>
            </div>
            <p className="text-gray-600">303.434.1900</p>
          </button>

          <button onClick={openApp} className="w-full h-[120px] bg-red-200 border border-red-500 text-lg font-semibold py-3 rounded-lg flex flex-col items-center justify-center">
            <div className="flex items-center mb-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
              </svg>
              <span className="ml-2">Click to File a Report</span>
            </div>
            <p className="text-gray-600">Open in Transit Watch</p>
          </button>
        </div>
      </div>
    </main>
  );
}