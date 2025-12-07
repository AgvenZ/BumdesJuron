<template>
  <div class="home">
    <Navigation />
    <header class="hero">
      <div class="hero-content">
        <h1>Selamat Datang di BUMDes Juron</h1>
        <p>Badan Usaha Milik Desa untuk kemakmuran masyarakat</p>
        <div class="cta-buttons">
          <router-link to="/units" class="btn btn-primary">Lihat Unit Usaha</router-link>
          <router-link to="/documents" class="btn btn-secondary">Dokumen</router-link>
        </div>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2>Fitur Utama</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Unit Usaha</h3>
            <p>Kelola dan monitor semua unit usaha milik desa</p>
          </div>
          <div class="feature-card">
            <h3>Dokumen</h3>
            <p>Akses dokumen-dokumen penting BUMDes</p>
          </div>
          <div class="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Panel administrasi untuk pengelolaan BUMDes</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.features {
  padding: 80px 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}
</style>