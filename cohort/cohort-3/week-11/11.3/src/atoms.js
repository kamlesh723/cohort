import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get:async ()=>{
            // await new Promise(r=>setTimeout(r,2000));//sleeps for 3 sec, to see 
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
      
        }
    })
         
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})





















// import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key:"networkAtom",
//     default:104
// })
// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })
// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get:({get})=>{
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationAtomCount = get(notificationAtom)
//         const messagingAtomCount = get(messagingAtom)
//         return networkAtomCount+ jobsAtomCount + notificationAtomCount+messagingAtomCount
//     }
    
// })