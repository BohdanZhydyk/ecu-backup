
export function getApiUrl() {
  const hostname = window.location.hostname
  return hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://ecu-backup.bzdrive.com'
}