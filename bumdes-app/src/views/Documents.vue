<template>
  <div class="documents">
    <Navigation />
    <div class="container">
      <h1>Dokumen BUMDes</h1>
      <p class="subtitle">Akses dokumen-dokumen penting dan laporan BUMDes Juron</p>
      
      <div class="document-categories">
        <div class="category-section" v-for="category in documentCategories" :key="category.id">
          <h2>{{ category.name }}</h2>
          <div class="documents-grid">
            <div class="document-card" v-for="document in category.documents" :key="document.id">
              <div class="document-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              <div class="document-info">
                <h3>{{ document.title }}</h3>
                <p class="document-description">{{ document.description }}</p>
                <div class="document-meta">
                  <span class="document-date">{{ document.date }}</span>
                  <span class="document-size">{{ document.size }}</span>
                </div>
              </div>
              <div class="document-actions">
                <button class="btn btn-primary">Download</button>
                <button class="btn btn-secondary">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Documents',
  components: {
    Navigation
  },
  data() {
    return {
      documentCategories: [
        {
          id: 1,
          name: 'Laporan Keuangan',
          documents: [
            {
              id: 1,
              title: 'Laporan Keuangan Bulan Januari 2024',
              description: 'Laporan keuangan lengkap bulan Januari 2024',
              date: '1 Februari 2024',
              size: '2.5 MB'
            },
            {
              id: 2,
              title: 'Laporan Keuangan Bulan Desember 2023',
              description: 'Laporan keuangan lengkap bulan Desember 2023',
              date: '1 Januari 2024',
              size: '2.3 MB'
            },
            {
              id: 3,
              title: 'Laporan Tahunan 2023',
              description: 'Laporan keuangan tahunan BUMDes Juron 2023',
              date: '15 Januari 2024',
              size: '8.7 MB'
            }
          ]
        },
        {
          id: 2,
          name: 'Dokumen Legal',
          documents: [
            {
              id: 4,
              title: 'AD/ART BUMDes Juron',
              description: 'Anggaran Dasar dan Anggaran Rumah Tangga BUMDes',
              date: '1 Januari 2023',
              size: '1.2 MB'
            },
            {
              id: 5,
              title: 'SK Pendirian BUMDes',
              description: 'Surat Keputusan Pendirian BUMDes Juron',
              date: '15 Desember 2022',
              size: '850 KB'
            },
            {
              id: 6,
              title: 'NIB BUMDes Juron',
              description: 'Nomor Induk Berusaha BUMDes Juron',
              date: '20 Januari 2023',
              size: '650 KB'
            }
          ]
        },
        {
          id: 3,
          name: 'Laporan Kegiatan',
          documents: [
            {
              id: 7,
              title: 'Laporan Kegiatan Sosial 2023',
              description: 'Laporan kegiatan sosial dan CSR BUMDes',
              date: '30 Desember 2023',
              size: '3.1 MB'
            },
            {
              id: 8,
              title: 'Dokumentasi Pelatihan Kewirausahaan',
              description: 'Dokumentasi kegiatan pelatihan wirausaha',
              date: '15 November 2023',
              size: '5.8 MB'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.documents {
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
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.category-section {
  margin-bottom: 3rem;
}

.category-section h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.document-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.document-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.document-icon {
  color: #667eea;
  flex-shrink: 0;
}

.document-info {
  flex: 1;
}

.document-info h3 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.document-description {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.document-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #888;
}

.document-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
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