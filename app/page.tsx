import { siteData, navigation } from '@/lib/data'

export default function DashboardPage() {
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome back to NetworkHub</h1>
          <p className="text-xl opacity-90">Manage your professional connections</p>
          <button className="mt-8 btn btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Content Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Item {item}</h3>
              <p className="text-gray-600 mb-4">This is a sample item in the grid layout.</p>
              <button className="btn btn-primary">View Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-8">
        <div className="card p-8 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Activity</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Overview of your networking activity and quick actions</p>
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
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