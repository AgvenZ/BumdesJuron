<template>
  <div class="login-admin">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>Admin Login</h1>
          <p>Masuk ke dashboard administrasi BUMDes Juron</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              required 
              placeholder="Masukkan username"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              required 
              placeholder="Masukkan password"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label class="checkbox-container">
              <input type="checkbox" v-model="rememberMe" />
              <span class="checkmark"></span>
              Ingat saya
            </label>
          </div>
          
          <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
            {{ loading ? 'Memproses...' : 'Login' }}
          </button>
          
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
        </form>
        
        <div class="login-footer">
          <p>Lupa password? <a href="#">Hubungi administrator</a></p>
        </div>
      </div>
      
      <div class="login-info">
        <h2>BUMDes Juron</h2>
        <p>Dashboard administrasi untuk pengelolaan Badan Usaha Milik Desa</p>
        <div class="features">
          <div class="feature">
            <span class="icon">📊</span>
            <span>Kelola laporan keuangan</span>
          </div>
          <div class="feature">
            <span class="icon">🏪</span>
            <span>Kelola unit usaha</span>
          </div>
          <div class="feature">
            <span class="icon">📄</span>
            <span>Kelola dokumen</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginAdmin',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      loading: false,
      error: ''
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.error = ''
      
      // Simulasi login - dalam aplikasi nyata ini akan API call
      setTimeout(() => {
        if (this.username === 'admin' && this.password === 'admin123') {
          // Login berhasil
          localStorage.setItem('adminToken', 'simulated-token')
          this.$router.push('/admin/dashboard')
        } else {
          this.error = 'Username atau password salah'
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.login-admin {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.login-header p {
  color: #666;
  margin: 0;
}

.login-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-container input {
  margin-right: 0.5rem;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
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

.btn-block {
  width: 100%;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
}

.login-footer {
  text-align: center;
  color: #666;
}

.login-footer a {
  color: #667eea;
  text-decoration: none;
}

.login-footer a:hover {
  text-decoration: underline;
}

.login-info {
  background: rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 2.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-info h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.login-info p {
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.feature .icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .login-container {
    grid-template-columns: 1fr;
  }
  
  .login-info {
    order: -1;
    text-align: center;
  }
  
  .features {
    align-items: center;
  }
}
</style>