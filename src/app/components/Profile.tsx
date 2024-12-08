// 'use client'

// import { useUser } from '@auth0/nextjs-auth0/client';

// function Profile() {
//   const { user, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="bg-white container mx-auto mt-8 p-4">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       {user && (
//         <div>
//           <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24 mb-4" />
//           <h2 className="text-xl mb-2">{user.name}</h2>
//           <p className="mb-2">{user.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;