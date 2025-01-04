import axios from "axios";



export default axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWFhZDJmMTQwYTY3YjEwZDNjMzFmZGQ3MTc2MjE5MyIsIm5iZiI6MTczNTk3MDkzMi43OTksInN1YiI6IjY3NzhkMDc0NTVkNGIzOGY5MzY2YjE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9G5DZXfb_E1wch-KQmU0GlFZy9MCJi-x4x1UiLlRZzI'
      }
})