// import { useState, useMemo } from 'react';
// import authContext from './contex';
// import avatar from '../../../jpg/avatar.png';

// // передаем эту функцию в INDEX и там оборачиваем все APP
// export default function HooksContext({ children }) {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const onLogIn = () => {
//     setUser({ name: 'Mango', avatar });
//     setIsLoggedIn(true);
//   };

//   const onLogOut = () => {
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   const providerValue = useMemo(() => {
//     return { user, isLoggedIn, onLogIn, onLogOut };
//   }, [isLoggedIn, user]);

//   return (
//     <authContext.Provider value={providerValue}>
//       {children}
//     </authContext.Provider>
//   );
// }
