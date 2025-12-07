<template>
  <div class="dashboard-admin">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2>BUMDes Juron</h2>
        <p>Admin Dashboard</p>
      </div>
      
      <nav class="sidebar-nav">
        <ul>
          <li><a href="#" class="nav-link active">📊 Dashboard</a></li>
          <li><a href="#" class="nav-link">🏪 Unit Usaha</a></li>
          <li><a href="#" class="nav-link">📄 Dokumen</a></li>
          <li><a href="#" class="nav-link">💰 Keuangan</a></li>
          <li><a href="#" class="nav-link">👥 Pengguna</a></li>
          <li><a href="#" class="nav-link">⚙️ Pengaturan</a></li>
        </ul>
      </nav>
      
      <div class="sidebar-footer">
        <button @click="logout" class="btn-logout">🚪 Logout</button>
      </div>
    </aside>
    
    <main class="main-content">
      <header class="top-header">
        <h1>Dashboard</h1>
        <div class="user-info">
          <span>Selamat datang, Admin</span>
          <div class="user-avatar">A</div>
        </div>
      </header>
      
      <div class="dashboard-content">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">🏪</div>
            <div class="stat-info">
              <h3>{{ stats.totalUnits }}</h3>
              <p>Total Unit Usaha</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div class="stat-info">
              <h3>{{ stats.totalRevenue }}</h3>
              <p>Total Pendapatan</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">📄</div>
            <div class="stat-info">
              <h3>{{ stats.totalDocuments }}</h3>
              <p>Total Dokumen</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-info">
              <h3>{{ stats.activeUsers }}</h3>
              <p>Pengguna Aktif</p>
            </div>
          </div>
        </div>
        
        <div class="content-grid">
          <div class="recent-activities">
            <h2>Aktivitas Terbaru</h2>
            <div class="activity-list">
              <div class="activity-item" v-for="activity in recentActivities" :key="activity.id">
                <div class="activity-icon">{{ activity.icon }}</div>
                <div class="activity-content">
                  <p class="activity-title">{{ activity.title }}</p>
                  <p class="activity-time">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="quick-actions">
            <h2>Aksi Cepat</h2>
            <div class="action-buttons">
              <button class="btn-action">➕ Tambah Unit Usaha</button>
              <button class="btn-action">📤 Upload Dokumen</button>
              <button class="btn-action">💵 Catat Transaksi</button>
              <button class="btn-action">📊 Buat Laporan</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  data() {
    return {
      stats: {
        totalUnits: 4,
        totalRevenue: 'Rp 45.500.000',
        totalDocuments: 12,
        activeUsers: 3
      },
      recentActivities: [
        {
          id: 1,
          icon: '🏪',
          title: 'Unit usaha baru "Kedai Kopi" ditambahkan',
          time: '2 jam yang lalu'
        },
        {
          id: 2,
          icon: '💰',
          title: 'Pendapatan bulan Januari diperbarui',
          time: '5 jam yang lalu'
        },
        {
          id: 3,
          icon: '📄',
          title: 'Laporan keuangan Q1 2024 diupload',
          time: '1 hari yang lalu'
        },
        {
          id: 4,
          icon: '👥',
          title: 'Admin baru ditambahkan',
          time: '2 hari yang lalu'
        }
      ]
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('adminToken')
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style scoped>
.dashboard-admin {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
}

.sidebar {
  width: 250px;
  background: white;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.sidebar-header h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.sidebar-header p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin: 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background: #f8f9fa;
  border-left-color: #667eea;
}

.nav-link.active {
  background: #f0f4ff;
  border-left-color: #667eea;
  color: #667eea;
  font-weight: 600;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}

.btn-logout {
  width: 100%;
  padding: 0.75rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: #c82333;
  transform: translateY(-1px);
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.top-header h1 {
  margin: 0;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  color: #333;
}

.stat-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.recent-activities,
.quick-actions {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.recent-activities h2,
.quick-actions h2 {
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.3rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.activity-icon {
  font-size: 1.5rem;
}

.activity-content {
  flex: 1;
}

.activity-title {
  margin: 0 0 0.25rem 0;
  color: #333;
  font-weight: 500;
}

.activity-time {
  margin: 0;
  color: #666;
  font-size: 0.8rem;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-action {
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: left;
}

.btn-action:hover {
  background: #e9ecef;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .dashboard-admin {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>