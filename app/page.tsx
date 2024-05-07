

// pages/index.js
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [appInstalled, setAppInstalled] = useState(false);
  const appScheme = 'thebrassstargroup-rtd://thethebrassstargroup.com/report';
  const appStoreUrl = 'https://play.google.com/store/apps/details?id=com.thebrassstargroup.rtduserapp';
  const appStoreUrliOS = 'https://apps.apple.com/in/app/rtd-transit-watch/id872831137';

  useEffect(() => {
    // Check if the app is installed
    const checkAppInstalled = () => {
      // Check if the app scheme can be invoked
      if (isAppInstallediOS() || isAppInstalledAndroid()) {
        setAppInstalled(true);
      } else {
        setAppInstalled(false);
      }
    };

    checkAppInstalled();
  }, []);

  const isAppInstallediOS = () => {
    // Check if the device is iOS and the app can be opened
    return /iPad|iPhone|iPod/.test(navigator.platform) && 'standalone' in window.navigator && window.navigator.standalone;
  };

  const isAppInstalledAndroid = () => {
    // Check if the app can be opened on Android
    // We assume the app is installed if it's being opened from an Android device
    return /Android/i.test(navigator.userAgent);
  };

  const redirectToAppStore = () => {
    // Redirect to Play Store for Android or App Store for iOS
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = appStoreUrl;
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      window.location.href = appStoreUrliOS;
    }
  };

  const handleButtonClick = () => {
    if (appInstalled) {
      window.location.href = appScheme; // Open the app
    } else {
      redirectToAppStore();
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-100">
      <div className="text-center border p-6 sm:p-16 rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl sm:text-5xl font-semibold mb-4">Safety</h1>
          <img src="/warning.png" alt="Warning Icon" className="w-24 sm:w-24 h-14 sm:h-24 mb-2" />
        </div>

        <h2 className="text-xl sm:text-xl mb-4 font-semibold">If you are concerned about your safety, contact the transit police.</h2>

        <div className="flex flex-col gap-4">
          <button onClick={handleButtonClick} className="w-full h-16 sm:h-20 border border-red-500 text-red-500 text-lg sm:text-xl font-semibold py-2 sm:py-3 rounded-lg flex items-center justify-center hover:bg-red-100 transition duration-300">
            <div className='mb-5 mr-2'>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
              </svg>
            </div>
            <div>
              <span>Click to File a Report</span>
              <br />
              <span className="text-sm text-gray-600">Open in Transit Watch</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}


// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [appInstalled, setAppInstalled] = useState(false);
//   const appPackageName = 'com.thebrassstargroup.rtduserapp'; // Package name of the app
//   const appScheme = 'thebrassstargroup-rtd://thethebrassstargroup.com/report';
//   const appStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageName}`;
//   const appStoreUrliOS = `https://apps.apple.com/in/app/rtd-transit-watch/id872831137`;

//   useEffect(() => {
//     // Check if the app is installed
//     const checkAppInstalled = () => {
//       // Check if the app scheme can be invoked
//       if (isAppInstallediOS() || isAppInstalledAndroid()) {
//         setAppInstalled(true);
//       } else {
//         setAppInstalled(false);
//       }
//     };

//     checkAppInstalled();
//   }, []);

//   const isAppInstallediOS = () => {
//     // Check if the device is iOS and the app can be opened
//     return /iPad|iPhone|iPod/.test(navigator.platform) && 'standalone' in window.navigator && window.navigator.standalone;
//   };

//   const isAppInstalledAndroid = () => {
//     // Check if the app can be opened on Android
//     return window.document && window.document.URL.indexOf(appScheme) !== -1;
//   };

//   const redirectToAppStore = () => {
//     // Redirect to Play Store for Android or App Store for iOS
//     const userAgent = navigator.userAgent || navigator.vendor;

//     if (/android/i.test(userAgent)) {
//       window.location.href = appStoreUrl;
//     } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
//       window.location.href = appStoreUrliOS;
//     }
//   };

//   const handleButtonClick = () => {
//     if (appInstalled) {
//       window.location.href = appScheme; // Open the app
//     } else {
//       redirectToAppStore();
//     }
//   };
  
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-100">
//       <div className="text-center border p-6 sm:p-16 rounded-lg">
//         <div className="flex flex-col items-center mb-4">
//           <h1 className="text-2xl sm:text-5xl font-semibold mb-4">Safety</h1>
//           <img src="/warning.png" alt="Warning Icon" className="w-24 sm:w-24 h-14 sm:h-24 mb-2" />
//         </div>

//         <h2 className="text-xl sm:text-xl mb-4 font-semibold">If you are concerned about your safety, contact the transit police.</h2>

//         <div className="flex flex-col gap-4">
//           <button onClick={handleButtonClick} className="w-full h-16 sm:h-20 border border-red-500 text-red-500 text-lg sm:text-xl font-semibold py-2 sm:py-3 rounded-lg flex items-center justify-center hover:bg-red-100 transition duration-300">
//             <div className='mb-5 mr-2'>
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
//                 <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
//               </svg>
//             </div>
//             <div>
//               <span>Click to File a Report</span>
//               <br />
//               <span className="text-sm text-gray-600">Open in Transit Watch</span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [appInstalled, setAppInstalled] = useState(false);
//   const appPackageName = 'com.thebrassstargroup.rtduserapp'; // Package name of the app
//   const appScheme = 'thebrassstargroup-rtd://thethebrassstargroup.com/report'; // Custom URI scheme for your app

//   useEffect(() => {
//     // Check if the app is installed
//     const checkAppInstalled = () => {
//       const timer = setTimeout(() => {
//         setAppInstalled(false); // Assume app is not installed if URI scheme is not invoked after 2 seconds
//       }, 2000); // Set a timeout to assume the app is not installed after 2 seconds

//       window.addEventListener('pagehide', () => {
//         clearTimeout(timer); // Clear the timeout when the page is hidden
//       });

//       window.location.href = appScheme; // Try to invoke the app scheme
//     };

//     checkAppInstalled();
//   }, []);

//   const redirectToPlayStore = () => {
//     // Redirect to Play Store
//     window.location.href = `https://play.google.com/store/apps/details?id=${appPackageName}`;
//   };

//   const handleButtonClick = () => {
//     if (appInstalled) {
//       // If app is installed, open the app using the custom URI scheme
//       window.location.href = appScheme;
//     } else {
//       // If app is not installed, redirect to the Play Store
//       redirectToPlayStore();
//     }
//   };

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-100">
//       <div className="text-center border p-6 sm:p-16 rounded-lg">
//         <div className="flex flex-col items-center mb-4">
//           <h1 className="text-2xl sm:text-5xl font-semibold mb-4">Safety</h1>
//           <img src="/warning.png" alt="Warning Icon" className="w-24 sm:w-24 h-14 sm:h-24 mb-2" />
//         </div>

//         <h2 className="text-xl sm:text-xl mb-4 font-semibold">If you are concerned about your safety, contact the transit police.</h2>

//         <div className="flex flex-col gap-4">
//           <button className="w-full h-16 sm:h-20 border border-red-500 text-red-500 text-lg sm:text-xl font-semibold py-2 sm:py-3 rounded-lg flex items-center justify-center hover:bg-red-100 transition duration-300" onClick={handleButtonClick}>
//             <div className='mb-5 mr-2'>
//               <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
//                 <path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"/>
//               </svg>
//             </div>
//             <div>
//               <span>Click to File a Report</span>
//               <br />
//               <span className="text-sm text-gray-600">Open in Transit Watch</span>
//             </div>
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
