export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    console.log("Quote request received:", data);

    return res.status(200).json({
      success: true,
      message: "Quote request received"
    });
  } catch (error) {
    console.error("Jobber API error:", error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong"
    });
  }
}