import { siteData, navigation } from '@/lib/data'

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'NetworkHub'}</h1>
            <div className="flex space-x-6">
              <a key={index} href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Dashboard
              </a>
              <a key={index} href="/connections" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                My Connections
              </a>
              <a key={index} href="/messages" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Messages
              </a>
              <a key={index} href="/events" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Events
              </a>
              <a key={index} href="/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                My Profile
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">List View</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">List Item {item}</h3>
                  <p className="text-gray-600 mt-1">This is a sample list item with some description.</p>
                </div>
                <button className="btn btn-secondary">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'NetworkHub'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}