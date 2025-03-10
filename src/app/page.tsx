'use client'
import { useUsersApi } from "./hooks/apiUsers";
import UserInfo from "./components/userInfo";
import UserInfoSmall from "./components/userInfoSmall";

export default function Home() {
  const { currentUser, userHistory, error, loading, setUser, fetchUserData } = useUsersApi()
  
  if (error) {
    return <div>Error loading data</div>; 
  }

  return (
    
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="grid grid-cols 1 gap-8 flex justify-center items-center">
        <button onClick={fetchUserData} className="px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer">
          Generar
        </button>
        <div className="font-bold text-gray-700">
          {loading && <p>Loading...</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="font-bold text-gray-100">
          <h1>User history</h1>
          <div className="grid grid-cols-1 gap-2">
            {userHistory.map((user, index) => (
              <UserInfoSmall key={index} user={user} onClick={() => setUser(user)} />
            ))}
          </div>
        </div>
        <div className="font-bold text-gray-700">
          {currentUser && <UserInfo user={currentUser} />}
        </div>
      </div>
    </div>
  );
}
