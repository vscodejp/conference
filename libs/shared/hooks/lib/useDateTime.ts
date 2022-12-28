import dayjs from 'dayjs'

export function useDateTime() {
  const getTimeStyle = (str: string) => {
    return str == null ? '' : formatTime(str).slice(0, 2) + ':' + formatTime(str).slice(2)
  }
  const formatTime = (str: string) => {
    return dayjs(str).format('HH:mm')
  }
  return { getTimeStyle, formatTime }
}
