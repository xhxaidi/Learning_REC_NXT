interface UserStats {
  posts: number;
  followers: number;
  following: number;
}

interface User {
  name: string;
  role: string;
  avatar: string; // emoji works fine as a placeholder avatar
  email: string;
  phone: string;
  location: string;
  stats: UserStats;
}

interface UserAction {
  label: string;
  icon: string;
  onClick: () => void;
}

// ---- One card that takes the whole user object + actions ----
function UserProfileCard({
  user,
  actions,
}: {
  user: User;
  actions: UserAction[];
}) {
  const stats = [
    { label: "Posts", value: user.stats.posts },
    { label: "Followers", value: user.stats.followers },
    { label: "Following", value: user.stats.following },
  ];

  return (
    <div className="max-w-md p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md">
      {/* Header: avatar + name + role */}
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 text-3xl bg-blue-500 rounded-full">
          {user.avatar}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
          <p className="text-sm text-blue-600 font-medium">{user.role}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-4 space-y-1 text-gray-700">
        <p>📧 {user.email}</p>
        <p>📱 {user.phone}</p>
        <p>📍 {user.location}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-center mt-4 pt-4 border-t border-blue-200">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-blue-600">{item.value}</p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-blue-200">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white cursor-pointer transition-colors"
          >
            <span className="mr-2">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}

const ComplexProp = () => {
  // the complex object we pass down as a single prop
  const user: User = {
    name: "Hasan Zaidi",
    role: "Developer / Instructor",
    avatar: "🧑‍💻",
    email: "xhaidi@gmail.com",
    phone: "+1 234 567 890",
    location: "Toronto, Canada",
    stats: {
      posts: 128,
      followers: 4500,
      following: 312,
    },
  };

  // a second dummy user
  const user2: User = {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    avatar: "🎨",
    email: "ayesha@gmail.com",
    phone: "+1 987 654 321",
    location: "Vancouver, Canada",
    stats: {
      posts: 342,
      followers: 8900,
      following: 156,
    },
  };

  // helper so each user gets its own set of actions
  const makeActions = (u: User): UserAction[] => [
    {
      label: "Follow",
      icon: "➕",
      onClick: () => alert(`Following ${u.name}`),
    },
    {
      label: "Message",
      icon: "💬",
      onClick: () => alert(`Messaging ${u.name}`),
    },
    {
      label: "Share",
      icon: "🔗",
      onClick: () => alert(`Sharing ${u.name}'s profile`),
    },
  ];

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">ComplexProp</h2>
      <p className="mb-6 text-gray-600">
        Passing whole objects, nested objects, arrays, and functions as props
        into a single card component.
      </p>
      <div className="flex flex-wrap gap-6 items-start">
        <UserProfileCard user={user} actions={makeActions(user)} />
        <UserProfileCard user={user2} actions={makeActions(user2)} />
      </div>
    </section>
  );
};

export default ComplexProp;
