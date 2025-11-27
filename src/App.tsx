import { useState } from 'react';
import { Heart, MessageCircle, Users, UserPlus, UserMinus, ImageIcon } from 'lucide-react';

interface Notification {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  type: 'reaction' | 'follow' | 'join' | 'message' | 'comment' | 'leave';
  content: string;
  time: string;
  isRead: boolean;
  postTitle?: string;
  message?: string;
  groupName?: string;
  hasImage?: boolean;
}

const NotificationsPanel = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      user: {
        name: 'Mark Webber',
        avatar: 'public/avatar-mark-webber.webp'
      },
      type: 'reaction',
      content: 'reacted to your recent post',
      postTitle: 'My first tournament today!',
      time: '1m ago',
      isRead: false
    },
    {
      id: '2',
      user: {
        name: 'Angela Gray',
        avatar: 'public/avatar-angela-gray.webp'
      },
      type: 'follow',
      content: 'followed you',
      time: '5m ago',
      isRead: false
    },
    {
      id: '3',
      user: {
        name: 'Jacob Thompson',
        avatar: 'public/avatar-jacob-thompson.webp'
      },
      type: 'join',
      content: 'has joined your group',
      groupName: 'Chess Club',
      time: '1 day ago',
      isRead: false
    },
    {
      id: '4',
      user: {
        name: 'Rizky Hasanuddin',
        avatar: 'public/avatar-rizky-hasanuddin.webp'
      },
      type: 'message',
      content: 'sent you a private message',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days ago',
      isRead: true
    },
    {
      id: '5',
      user: {
        name: 'Kimberly Smith',
        avatar: '/public/avatar-kimberly-smith.webp'
      },
      type: 'comment',
      content: 'commented on your picture',
      time: '1 week ago',
      hasImage: true,
      isRead: true
    },
    {
      id: '6',
      user: {
        name: 'Nathan Peterson',
        avatar: 'public/avatar-nathan-peterson.webp'
      },
      type: 'reaction',
      content: 'reacted to your recent post',
      postTitle: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      isRead: true
    },
    {
      id: '7',
      user: {
        name: 'Anna Kim',
        avatar: 'public/avatar-anna-kim.webp'
      },
      type: 'leave',
      content: 'left the group',
      groupName: 'Chess Club',
      time: '2 weeks ago',
      isRead: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reaction':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'follow':
        return <UserPlus className="w-4 h-4 text-blue-500" />;
      case 'join':
        return <Users className="w-4 h-4 text-green-500" />;
      case 'message':
        return <MessageCircle className="w-4 h-4 text-purple-500" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'leave':
        return <UserMinus className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 font-sans">
      {/* Updated Header for Mobile */}

  <div className="flex items-center justify-between mb-4 sm:mb-6 px-4 sm:px-0">
  <div className="flex items-center gap-2 sm:gap-3">
  <h1 className="text-xl font-bold text-gray-900"> Notifications</h1>  {unreadCount > 0 && (
      <span className="bg-blue-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-md">
        {unreadCount}
      </span>
    )}
  </div>
  <button
    onClick={markAllAsRead}
    className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium transition-colors"
  >
    Mark all as read
  </button>
</div>


      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg transition-colors ${
              !notification.isRead ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            {getNotificationIcon(notification.type)}
                          </div>
                          {/* Avatar */}
                          <img
                            src={notification.user.avatar}
                            alt={notification.user.name}
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                          />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 leading-relaxed">
                      <span className="font-semibold text-gray-900">
                        {notification.user.name}
                      </span>{' '}
                      <span className="text-gray-600">{notification.content}</span>
                      {notification.postTitle && (
                        <span className="font-semibold text-gray-900 ml-1">
                          {notification.postTitle}
                        </span>
                      )}
                      {notification.groupName && (
                        <span className="font-semibold text-blue-600 ml-1">
                          {notification.groupName}
                        </span>
                      )}
                      {!notification.isRead && (
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>

                  {/* Right side content */}
                  <div className="flex items-center gap-2 ml-4">
                    {notification.hasImage && (
                      <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Private message content */}
                {notification.message && (
                  <div className="mt-3 p-3 bg-gray-100 rounded-md">
                    <p className="text-sm text-gray-700">{notification.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;