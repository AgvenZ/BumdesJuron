<template>
  <div class="units">
    <Navigation />
    <div class="container">
      <h1>Unit Usaha BUMDes</h1>
      <p class="subtitle">Daftar semua unit usaha yang dikelola oleh BUMDes Juron</p>
      
      <div class="units-grid">
        <div class="unit-card" v-for="unit in units" :key="unit.id">
          <div class="unit-header">
            <h3>{{ unit.name }}</h3>
            <span :class="['status', unit.status]">{{ unit.status }}</span>
          </div>
          <p class="unit-description">{{ unit.description }}</p>
          <div class="unit-details">
            <div class="detail-item">
              <strong>Manager:</strong> {{ unit.manager }}
            </div>
            <div class="detail-item">
              <strong>Estimasi Pendapatan:</strong> {{ unit.estimatedRevenue }}
            </div>
            <div class="detail-item">
              <strong>Tanggal Mulai:</strong> {{ unit.startDate }}
            </div>
          </div>
          <div class="unit-actions">
            <button class="btn btn-primary">Detail</button>
            <button class="btn btn-secondary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Units',
  components: {
    Navigation
  },
  data() {
    return {
      units: [
        {
          id: 1,
          name: 'Warung Desa',
          description: 'Warung sembako dan kebutuhan sehari-hari warga desa',
          manager: 'Bapak Suryanto',
          status: 'active',
          estimatedRevenue: 'Rp 5.000.000/bulan',
          startDate: 'Januari 2023'
        },
        {
          id: 2,
          name: 'Kios Pulsa',
          description: 'Penjualan pulsa dan paket data untuk warga',
          manager: 'Ibu Ratih',
          status: 'active',
          estimatedRevenue: 'Rp 2.500.000/bulan',
          startDate: 'Maret 2023'
        },
        {
          id: 3,
          name: 'Rental Motor',
          description: 'Penyewaan motor untuk warga dan pengunjung',
          manager: 'Bapak Wijaya',
          status: 'planning',
          estimatedRevenue: 'Rp 8.000.000/bulan',
          startDate: 'Januari 2024'
        },
        {
          id: 4,
          name: 'Kedai Kopi',
          description: 'Tempat nongkrong dan kumpul warga desa',
          manager: 'Bapak Imam',
          status: 'active',
          estimatedRevenue: 'Rp 3.000.000/bulan',
          startDate: 'Juni 2023'
        }
      ]
    }
  }
}
</script>

<style scoped>
.units {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.unit-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.unit-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.unit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.unit-header h3 {
  color: #333;
  margin: 0;
  font-size: 1.3rem;
}

.status {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status.active {
  background: #d4edda;
  color: #155724;
}

.status.planning {
  background: #fff3cd;
  color: #856404;
}

.unit-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.unit-details {
  margin-bottom: 1.5rem;
}

.detail-item {
  margin-bottom: 0.5rem;
  color: #555;
}

.detail-item strong {
  color: #333;
}

.unit-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style>