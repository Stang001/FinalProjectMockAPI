const name = localStorage.getItem("username");
const email = localStorage.getItem("email");

function FirePopup(a, b, c) {
    Swal.fire({
        text: a,
        icon: b,
        confirmButtonText: c
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function webhook() {
    var hook = new XMLHttpRequest();
    hook.open('POST', 'https://discord.com/api/webhooks/1305056496308064338/Oc-PZITxAwvWWka0litmN9Menf9YhofTx2ajCd09zhACkvcMUP5wUzLfnb77Ms7bTBGy');
    hook.setRequestHeader('Content-type', 'application/json');
    var content = {
        username: 'Unknown',
        avatar_url: 'https://example.com/profile-icon-for-bot.png',
        content: 'มีคนกดไลค์ Homepage คุณ'
    }
    hook.send(JSON.stringify(content));
}

function verifyJWT(token, secret) {
    const [header, body, signature] = token.split(".");
    if (!header || !body || !signature) {
        return { valid: false, reason: "Invalid token format" };
    }
    const validSignature = btoa(`${header}.${body}.${secret}`);
    if (signature !== validSignature) {
        return { valid: false, reason: "Invalid signature" };
    }
    let payload;
    try {
        payload = JSON.parse(atob(body));
    } catch (error) {
        return { valid: false, reason: "Invalid payload format" };
    }
    if (Date.now() / 1000 > payload.exp) {
        return { valid: false, reason: "Token expired" };
    }
    return { valid: true, payload };
}

function chktoken() {
    const token = localStorage.getItem("token");
    if (!token) {
        FirePopup("ไม่พบโทเคน | ล็อคอินใหม่ !", "error", "โอเค")
        sleep(2000).then(() => { window.location.href = "./index.html"; });
        return { valid: false }
    }
    const result = verifyJWT(token, "mysecret");
    if (!result.valid) {
        if (result.reason === "Token expired") {
            FirePopup("โทเคนหมดอายุ | ล็อคอินใหม่ !", "error", "โอเค")
            localStorage.removeItem("token");
            sleep(2000).then(() => { window.location.href = "./index.html"; });
            return { valid: false }
        } else {
            FirePopup("โทเคนผิด | ล็อคอินใหม่ !", "error", "โอเค")
            sleep(2000).then(() => { window.location.href = "./index.html"; });
            return { valid: false }
        }
    } else {
        return { valid: true }
    }
}
document.getElementById("checktoken")
    .addEventListener("click", function () {
        const token = localStorage.getItem("token");
        if (!token) {
            FirePopup("ไม่พบโทเคน | ล็อคอินใหม่ !", "error", "โอเค")
            sleep(2000).then(() => { window.location.href = "./index.html"; });
            return;
        }
        const result = verifyJWT(token, "mysecret");
        if (!result.valid) {
            if (result.reason === "Token expired") {
                FirePopup("โทเคนหมดอายุ | ล็อคอินใหม่ !", "error", "โอเค")
                localStorage.removeItem("token");
            } else {
                FirePopup("โทเคนผิด | ล็อคอินใหม่ !", "error", "โอเค")
            }
            sleep(2000).then(() => { window.location.href = "./index.html"; });
        } else {
            FirePopup("โทเคนถูกต้อง ! ยินดีต้อนรับ , " + result.payload.username, "success", "โอเค");
        }
    });
document.getElementById("logoutBtn")
    .addEventListener("click", function () {
        if (!chktoken().valid) { return }
        localStorage.removeItem("token");
        FirePopup("ออกจากระบบ เสร็จสิ้น !", "success", "โอเค")
        sleep(1000).then(() => { window.location.href = "./index.html"; });
    });
document.getElementById("ILIKEIT").addEventListener("click", function () {
    if (!chktoken().valid) { return }
    document.getElementById("chineseseses").volume = 1
    const china1 = document.getElementById('china1');
    china1.classList.add('active');
    setTimeout(() => {
        china1.classList.remove('active');
    }, 6500);
    document.getElementById("chineseseses").play();
    webhook()
})
