export const siteData = {
  "connections": [
    {
      "id": "1",
      "name": "Sarah Johnson",
      "title": "Senior Product Manager",
      "company": "TechCorp",
      "location": "San Francisco, CA",
      "avatar": "/avatars/sarah.jpg",
      "industry": "Technology",
      "connectedDate": "2024-01-15",
      "mutualConnections": 12
    },
    {
      "id": "2",
      "name": "Mike Chen",
      "title": "Software Engineer",
      "company": "StartupXYZ",
      "location": "Seattle, WA",
      "avatar": "/avatars/mike.jpg",
      "industry": "Technology",
      "connectedDate": "2024-02-03",
      "mutualConnections": 8
    },
    {
      "id": "3",
      "name": "Emily Rodriguez",
      "title": "Marketing Director",
      "company": "BrandCorp",
      "location": "New York, NY",
      "avatar": "/avatars/emily.jpg",
      "industry": "Marketing",
      "connectedDate": "2024-01-28",
      "mutualConnections": 15
    }
  ],
  "conversations": [
    {
      "id": "1",
      "participant": "Sarah Johnson",
      "lastMessage": "Thanks for connecting! Would love to chat about product management.",
      "timestamp": "2024-03-15T10:30:00Z",
      "unread": false,
      "avatar": "/avatars/sarah.jpg"
    },
    {
      "id": "2",
      "participant": "Mike Chen",
      "lastMessage": "Hey! Saw your post about React best practices. Very insightful!",
      "timestamp": "2024-03-15T09:15:00Z",
      "unread": true,
      "avatar": "/avatars/mike.jpg"
    }
  ],
  "events": [
    {
      "id": "1",
      "title": "Tech Networking Mixer",
      "date": "2024-03-25",
      "time": "6:00 PM - 9:00 PM",
      "location": "Downtown Convention Center",
      "description": "Join us for an evening of networking with tech professionals",
      "attendees": 45,
      "category": "Technology",
      "price": "Free"
    },
    {
      "id": "2",
      "title": "Product Manager Meetup",
      "date": "2024-03-28",
      "time": "7:00 PM - 9:30 PM",
      "location": "Innovation Hub",
      "description": "Monthly meetup for product managers to share insights",
      "attendees": 32,
      "category": "Product",
      "price": "$15"
    }
  ],
  "currentUser": {
    "id": "user-1",
    "name": "Alex Thompson",
    "title": "Full Stack Developer",
    "company": "Digital Solutions Inc.",
    "location": "Austin, TX",
    "email": "alex@example.com",
    "bio": "Passionate full-stack developer with 5+ years experience building scalable web applications.",
    "skills": [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB"
    ],
    "avatar": "/avatars/alex.jpg"
  },
  "settings": {
    "appName": "NetworkHub",
    "description": "Professional networking platform for connecting with industry peers and managing business relationships",
    "version": "1.0.0",
    "notifications": {
      "newConnections": true,
      "messages": true,
      "events": true,
      "emailDigest": "weekly"
    },
    "privacy": {
      "profileVisibility": "public",
      "showEmail": false,
      "showPhone": false
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "My Connections",
      "route": "/connections",
      "icon": "users"
    },
    {
      "label": "Messages",
      "route": "/messages",
      "icon": "message-circle",
      "badge": "8"
    },
    {
      "label": "Events",
      "route": "/events",
      "icon": "calendar"
    },
    {
      "label": "My Profile",
      "route": "/profile",
      "icon": "user"
    }
  ],
  "footer": [
    {
      "label": "Help & Support",
      "route": "/support"
    },
    {
      "label": "Privacy Policy",
      "route": "/privacy"
    },
    {
      "label": "Terms of Service",
      "route": "/terms"
    }
  ]
};