let arr = []

arr = [...arr, JSON.parse(localStorage.getItem('recentItem'))]

export default arr;