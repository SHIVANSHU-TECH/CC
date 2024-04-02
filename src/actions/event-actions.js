export const createEvent = async (data) => {
  const res = await data.get("eimg")
  const title = await data.get("event")
  try {
    console.log(res)
    console.log(title)
  } catch (error) {
    console.log(error)
  }
}
