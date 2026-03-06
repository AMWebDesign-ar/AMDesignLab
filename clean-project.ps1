# clean-project.ps1
$ErrorActionPreference = "Stop"

Write-Host "=== Limpieza de proyecto AM Studio / AM Design Lab ===" -ForegroundColor Cyan
Write-Host "IMPORTANTE: ejecutá esto solo si ya hiciste commit o backup." -ForegroundColor Yellow

# ---------- 1) Archivos sin uso ----------
$unusedFiles = @(
  "client/src/components/theme-toggle.tsx"
  "client/src/hooks/use-mobile.tsx"
  "client/src/components/ui/accordion.tsx"
  "client/src/components/ui/alert-dialog.tsx"
  "client/src/components/ui/alert.tsx"
  "client/src/components/ui/aspect-ratio.tsx"
  "client/src/components/ui/avatar.tsx"
  "client/src/components/ui/badge.tsx"
  "client/src/components/ui/breadcrumb.tsx"
  "client/src/components/ui/calendar.tsx"
  "client/src/components/ui/carousel.tsx"
  "client/src/components/ui/chart.tsx"
  "client/src/components/ui/checkbox.tsx"
  "client/src/components/ui/collapsible.tsx"
  "client/src/components/ui/command.tsx"
  "client/src/components/ui/context-menu.tsx"
  "client/src/components/ui/dialog.tsx"
  "client/src/components/ui/drawer.tsx"
  "client/src/components/ui/dropdown-menu.tsx"
  "client/src/components/ui/form.tsx"
  "client/src/components/ui/hover-card.tsx"
  "client/src/components/ui/input-otp.tsx"
  "client/src/components/ui/label.tsx"
  "client/src/components/ui/menubar.tsx"
  "client/src/components/ui/navigation-menu.tsx"
  "client/src/components/ui/pagination.tsx"
  "client/src/components/ui/popover.tsx"
  "client/src/components/ui/progress.tsx"
  "client/src/components/ui/radio-group.tsx"
  "client/src/components/ui/resizable.tsx"
  "client/src/components/ui/scroll-area.tsx"
  "client/src/components/ui/select.tsx"
  "client/src/components/ui/separator.tsx"
  "client/src/components/ui/sheet.tsx"
  "client/src/components/ui/sidebar.tsx"
  "client/src/components/ui/skeleton.tsx"
  "client/src/components/ui/slider.tsx"
  "client/src/components/ui/switch.tsx"
  "client/src/components/ui/table.tsx"
  "client/src/components/ui/tabs.tsx"
  "client/src/components/ui/toggle-group.tsx"
  "client/src/components/ui/toggle.tsx"
  "server/db.ts"
  "server/storage.ts"
)

Write-Host "`n[1/6] Borrando archivos sin uso..." -ForegroundColor Green
foreach ($file in $unusedFiles) {
  if (Test-Path $file) {
    Remove-Item $file -Force
    Write-Host "  Eliminado: $file"
  } else {
    Write-Host "  No existe, se omite: $file" -ForegroundColor DarkYellow
  }
}

# ---------- 2) Dependencias sin uso ----------
$unusedDeps = @(
  "@hookform/resolvers"
  "@jridgewell/trace-mapping"
  "@radix-ui/react-accordion"
  "@radix-ui/react-alert-dialog"
  "@radix-ui/react-aspect-ratio"
  "@radix-ui/react-avatar"
  "@radix-ui/react-checkbox"
  "@radix-ui/react-collapsible"
  "@radix-ui/react-context-menu"
  "@radix-ui/react-dialog"
  "@radix-ui/react-dropdown-menu"
  "@radix-ui/react-hover-card"
  "@radix-ui/react-label"
  "@radix-ui/react-menubar"
  "@radix-ui/react-navigation-menu"
  "@radix-ui/react-popover"
  "@radix-ui/react-progress"
  "@radix-ui/react-radio-group"
  "@radix-ui/react-scroll-area"
  "@radix-ui/react-select"
  "@radix-ui/react-separator"
  "@radix-ui/react-slider"
  "@radix-ui/react-switch"
  "@radix-ui/react-tabs"
  "@radix-ui/react-toggle"
  "@radix-ui/react-toggle-group"
  "cmdk"
  "connect-pg-simple"
  "date-fns"
  "embla-carousel-react"
  "express-session"
  "input-otp"
  "memorystore"
  "next-themes"
  "nodemailer"
  "passport"
  "passport-local"
  "react-day-picker"
  "react-hook-form"
  "react-resizable-panels"
  "recharts"
  "tw-animate-css"
  "vaul"
  "ws"
  "zod-validation-error"
)

$unusedDevDeps = @(
  "@eslint/css"
  "@eslint/json"
  "@eslint/markdown"
  "@tailwindcss/vite"
  "@types/connect-pg-simple"
  "@types/express-session"
  "@types/nodemailer"
  "@types/passport"
  "@types/passport-local"
  "@types/ws"
)

Write-Host "`n[2/6] Desinstalando dependencies sin uso..." -ForegroundColor Green
if ($unusedDeps.Count -gt 0) {
  npm uninstall @unusedDeps
}

Write-Host "`n[3/6] Desinstalando devDependencies sin uso..." -ForegroundColor Green
if ($unusedDevDeps.Count -gt 0) {
  npm uninstall -D @unusedDevDeps
}

# ---------- 3) Dependencia faltante detectada por Knip ----------
Write-Host "`n[4/6] Instalando dependencia faltante: nanoid..." -ForegroundColor Green
npm install nanoid

# ---------- 4) Limpiar carpetas vacías ----------
Write-Host "`n[5/6] Borrando carpetas vacías..." -ForegroundColor Green
Get-ChildItem -Path "." -Directory -Recurse |
  Sort-Object FullName -Descending |
  ForEach-Object {
    if (-not (Get-ChildItem -Path $_.FullName -Force | Select-Object -First 1)) {
      Remove-Item $_.FullName -Force
      Write-Host "  Carpeta vacía eliminada: $($_.FullName)"
    }
  }

# ---------- 5) Reinstalación limpia ----------
Write-Host "`n[6/6] Reinstalación limpia de node_modules..." -ForegroundColor Green
if (Test-Path "node_modules") {
  Remove-Item "node_modules" -Recurse -Force
}
if (Test-Path "package-lock.json") {
  Remove-Item "package-lock.json" -Force
}

npm install

# ---------- 6) Verificación final ----------
Write-Host "`nVerificando con Knip..." -ForegroundColor Cyan
$env:DATABASE_URL = "dummy"
npx knip

Write-Host "`nListo. Proyecto limpiado." -ForegroundColor Cyan