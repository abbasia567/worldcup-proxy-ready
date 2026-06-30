module.exports = async (req, res) => {
    // توکن خود را اینجا قرار دهید
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNDNiMjFlZmU1YWQxNjA0ODFjOTZkZSIsImlhdCI6MTc4MjgyMTQwNywiZXhwIjoxNzkwMDc5MDA3fQ.yU_VRpGav4BX3ZF58Q0-ORWu1BxB_tKkN4xIDYk3pJQ';
    
    // مسیر درخواستی را دریافت کنید
    const path = req.url.substring(1); // حذف اسلش اول
    
    // اگر مسیر خالی بود، پیش‌فرض groups
    const endpoint = path || 'groups';
    const url = `https://worldcup26.ir/get/${endpoint}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.text();
        res.setHeader('Content-Type', 'application/json');
        res.status(response.status).send(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
