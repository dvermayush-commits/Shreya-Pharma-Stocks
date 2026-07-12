// ================= SAFE DOM HELPER =================
function getVal(id) { let el = document.getElementById(id); return el ? el.value : ""; }

// ================= MASTER DATA (v25 - With Base Rate) =================
const exactMasterData = [
    { id: "M1", name: "MEDIVIT TAB", div: "MEDI", pack: "10X1X1", batch: "RST-7169", exp: "4/27", hsn: "21069099", oldMrp: 0, mrp: 1800, baseRate: 170, rate: 750, igst: 5, qty: 2, free: 0 },
    { id: "M2", name: "XIMBEX-AZL TAB", div: "MEDI", pack: "10X10", batch: "TB25428", exp: "10/27", hsn: "30042019", oldMrp: 3000, mrp: 2820, baseRate: 750, rate: 1200, igst: 5, qty: 5, free: 0 },
    { id: "M3", name: "ASOKLIN SP TAB SILVER", div: "MEDK", pack: "10X10", batch: "HT-26052", exp: "4/28", hsn: "30049069", oldMrp: 1500, mrp: 1125, baseRate: 90, rate: 260, igst: 5, qty: 8, free: 0 },
    { id: "M4", name: "ASOKLIN SP TAB RED PACK", div: "MEDK", pack: "10X10", batch: "TG26-035", exp: "2/28", hsn: "30049069", oldMrp: 0, mrp: 1000, baseRate: 90, rate: 260, igst: 5, qty: 6, free: 0 },
    { id: "M5", name: "BALAKLIN LC TAB", div: "MEDK", pack: "10X1X1", batch: "MFT-2616", exp: "2/28", hsn: "21069099", oldMrp: 2200, mrp: 2000, baseRate: 160, rate: 400, igst: 5, qty: 2, free: 0 },
    { id: "M6", name: "BOSSKID ADE SYP", div: "MEDK", pack: "200ML", batch: "MFL-2597", exp: "8/27", hsn: "21069099", oldMrp: 0, mrp: 210, baseRate: 25, rate: 80, igst: 5, qty: 10, free: 0 },
    { id: "M7", name: "CALCIBONE GUMMY", div: "MEDK", pack: "1*30", batch: "ASG-2602", exp: "8/27", hsn: "21069099", oldMrp: 350, mrp: 328.15, baseRate: 80, rate: 230, igst: 5, qty: 6, free: 0 },
    { id: "M8", name: "DIZIREX-16", div: "MEDK", pack: "10*10", batch: "AT251211", exp: "11/27", hsn: "30049099", oldMrp: 950, mrp: 890.6, baseRate: 70, rate: 300, igst: 5, qty: 2, free: 0 },
    { id: "M9", name: "DIZIREX-8 TAB", div: "MEDK", pack: "20X10", batch: "AT251211", exp: "11/27", hsn: "30049099", oldMrp: 880, mrp: 880, baseRate: 90, rate: 300, igst: 5, qty: 2, free: 0 },
    { id: "M10", name: "DR PAD MEDKLEIN", div: "MEDK", pack: "1", batch: "N/A", exp: "N/A", hsn: "48201090", oldMrp: 0, mrp: 0, baseRate: 0, rate: 0, igst: 5, qty: 5, free: 0 },
    { id: "M11", name: "EBAZEST 20 TAB", div: "MEDK", pack: "10X10", batch: "AT260214", exp: "1/28", hsn: "30049099", oldMrp: 1000, mrp: 937.5, baseRate: 90, rate: 370, igst: 5, qty: 3, free: 0 },
    { id: "M12", name: "ESMOKLIN-KID SACHET", div: "MEDK", pack: "10X1GM", batch: "G-51925", exp: "2/27", hsn: "30049099", oldMrp: 300, mrp: 300, baseRate: 50, rate: 200, igst: 5, qty: 2, free: 0 },
    { id: "M13", name: "FACTORANGE SYP", div: "MEDK", pack: "200ML", batch: "ME-318", exp: "10/27", hsn: "48201090", oldMrp: 0, mrp: 199, baseRate: 20, rate: 70, igst: 5, qty: 20, free: 0 },
    { id: "M14", name: "FASNOL MF 250 SUS", div: "MEDK", pack: "60ML", batch: "AL26030", exp: "2/28", hsn: "30049069", oldMrp: 80, mrp: 75, baseRate: 15, rate: 40, igst: 5, qty: 25, free: 0 },
    { id: "M15", name: "GABAKLIN NT TAB", div: "MEDK", pack: "10X1X1", batch: "AT26031", exp: "2/28", hsn: "30049099", oldMrp: 1650, mrp: 1600, baseRate: 150, rate: 500, igst: 5, qty: 2, free: 0 },
    { id: "M16", name: "GRISOWIN 500 TAB", div: "MEDK", pack: "10X10", batch: "AT26021", exp: "1/28", hsn: "30049099", oldMrp: 1850, mrp: 1734.3, baseRate: 540, rate: 1000, igst: 5, qty: 2, free: 0 },
    { id: "M17", name: "GUDZINC DHA AMERICAN ICE", div: "MEDK", pack: "200GM", batch: "ME-58", exp: "8/27", hsn: "21069099", oldMrp: 280, mrp: 350, baseRate: 32, rate: 100, igst: 5, qty: 15, free: 0 },
    { id: "M18", name: "GUDZINC TAB", div: "MEDK", pack: "10X1X1", batch: "FT25100", exp: "3/27", hsn: "21069099", oldMrp: 1199, mrp: 1070, baseRate: 180, rate: 650, igst: 5, qty: 3, free: 0 },
    { id: "M19", name: "GYNOPLUS SYP", div: "MEDK", pack: "200ML", batch: "ME-187", exp: "3/29", hsn: "30049099", oldMrp: 0, mrp: 185, baseRate: 20, rate: 70, igst: 5, qty: 10, free: 0 },
    { id: "M20", name: "HERFIX 400 ТАВ", div: "MEDK", pack: "10X10", batch: "AT26031", exp: "2/28", hsn: "30049099", oldMrp: 1528, mrp: 1459.5, baseRate: 260, rate: 700, igst: 5, qty: 2, free: 0 },
    { id: "M21", name: "KELINIM PLUS GOLDEN", div: "MEDK", pack: "20X10", batch: "AT-26A8", exp: "12/27", hsn: "30049099", oldMrp: 1118, mrp: 1118, baseRate: 90, rate: 240, igst: 5, qty: 5, free: 0 },
    { id: "M22", name: "KETOGAIN 200 TAB", div: "MEDK", pack: "10X10", batch: "AT25100", exp: "9/27", hsn: "30049099", oldMrp: 1900, mrp: 1800, baseRate: 150, rate: 700, igst: 5, qty: 3, free: 0 },
    { id: "M23", name: "KLIACET 10 ТАВ", div: "MEDK", pack: "10X10", batch: "25F-T988", exp: "8/27", hsn: "30049099", oldMrp: 700, mrp: 656.25, baseRate: 50, rate: 180, igst: 5, qty: 5, free: 0 },
    { id: "M24", name: "KLIACET 5 TAB", div: "MEDK", pack: "10X10", batch: "25K-T216", exp: "1/28", hsn: "30049029", oldMrp: 350, mrp: 320, baseRate: 35, rate: 150, igst: 5, qty: 5, free: 0 },
    { id: "M25", name: "KLIACET AM TAB", div: "MEDK", pack: "10X10", batch: "ST-25358", exp: "9/27", hsn: "30049099", oldMrp: 650, mrp: 650, baseRate: 70, rate: 300, igst: 5, qty: 3, free: 0 },
    { id: "M26", name: "KLIACET MT TAB", div: "MEDK", pack: "10X10", batch: "AT-26C10", exp: "2/28", hsn: "30049099", oldMrp: 1199, mrp: 1999, baseRate: 90, rate: 400, igst: 5, qty: 3, free: 0 },
    { id: "M27", name: "KLINMOL 500 SUS", div: "MEDK", pack: "60ML", batch: "AL26030", exp: "2/28", hsn: "30049069", oldMrp: 99, mrp: 99, baseRate: 20, rate: 46, igst: 5, qty: 30, free: 0 },
    { id: "M28", name: "KLINSHEL K27 CAP", div: "MEDK", pack: "10X1X1", batch: "ZBC-143", exp: "11/27", hsn: "21069099", oldMrp: 2500, mrp: 1900, baseRate: 120, rate: 700, igst: 5, qty: 3, free: 0 },
    { id: "M29", name: "KLINSHEL-M TAB", div: "MEDK", pack: "10X10", batch: "RFT-1500", exp: "2/27", hsn: "21069099", oldMrp: 3100, mrp: 3100, baseRate: 80, rate: 500, igst: 5, qty: 2, free: 0 },
    { id: "M30", name: "KLINTHIA 100 ТАВ", div: "MEDK", pack: "10X10", batch: "26B-T165", exp: "10/27", hsn: "21069099", oldMrp: 1500, mrp: 1500, baseRate: 90, rate: 350, igst: 5, qty: 3, free: 0 },
    { id: "M31", name: "KLINZICEF 200DT TAB", div: "MEDK", pack: "10X10", batch: "T250618", exp: "11/27", hsn: "30049029", oldMrp: 1094.2, mrp: 1044.7, baseRate: 360, rate: 600, igst: 5, qty: 2, free: 0 },
    { id: "M32", name: "LANOKLIN 15 TAB", div: "MEDK", pack: "10X10", batch: "AT25090", exp: "8/27", hsn: "30049099", oldMrp: 760, mrp: 760, baseRate: 80, rate: 460, igst: 5, qty: 2, free: 0 },
    { id: "M33", name: "MOXBEX CV 625 TAB", div: "MEDK", pack: "10X10", batch: "TB26-00", exp: "3/28", hsn: "30049099", oldMrp: 2085.4, mrp: 1967.7, baseRate: 530, rate: 750, igst: 5, qty: 3, free: 0 },
    { id: "M34", name: "MYCLARIX 250 TAB", div: "MEDK", pack: "10X10", batch: "AT25121", exp: "11/27", hsn: "30049099", oldMrp: 0, mrp: 2570.4, baseRate: 630, rate: 1100, igst: 5, qty: 2, free: 0 },
    { id: "M35", name: "MYCLARIX 500 TAB", div: "MEDK", pack: "10X10", batch: "AT25121", exp: "11/27", hsn: "48192020", oldMrp: 1200, mrp: 4255.6, baseRate: 1200, rate: 2050, igst: 5, qty: 2, free: 0 },
    { id: "M36", name: "MYCLARIX DRY SYP", div: "MEDK", pack: "30ML", batch: "DS26007", exp: "2/28", hsn: "30049099", oldMrp: 154.56, mrp: 148.9, baseRate: 26.5, rate: 80, igst: 5, qty: 10, free: 0 },
    { id: "M37", name: "NORSHE 5 TAB", div: "MEDK", pack: "10X10", batch: "HT-2604", exp: "3/28", hsn: "30049099", oldMrp: 603.6, mrp: 575.4, baseRate: 70, rate: 360, igst: 5, qty: 2, free: 0 },
    { id: "M38", name: "NUFYLINE 400 TAB", div: "MEDK", pack: "10X10", batch: "AT25111", exp: "10/27", hsn: "30049099", oldMrp: 150, mrp: 849, baseRate: 150, rate: 400, igst: 5, qty: 2, free: 0 },
    { id: "M39", name: "OFOKLIN FORTE SUS", div: "MEDK", pack: "30ML", batch: "AL25090", exp: "8/27", hsn: "30042039", oldMrp: 20, mrp: 84, baseRate: 20, rate: 46, igst: 5, qty: 30, free: 0 },
    { id: "M40", name: "PAPIFY TAB", div: "MEDK", pack: "10X1X1", batch: "VH-T193", exp: "10/27", hsn: "30041090", oldMrp: 3000, mrp: 3000, baseRate: 120, rate: 600, igst: 5, qty: 2, free: 0 },
    { id: "M41", name: "RANTIGO SYP", div: "MEDK", pack: "100ML", batch: "AL26040", exp: "9/27", hsn: "30049099", oldMrp: 134, mrp: 112.5, baseRate: 17, rate: 56, igst: 5, qty: 20, free: 0 },
    { id: "M42", name: "SS BOTTLES", div: "MEDK", pack: "1", batch: "N/A", exp: "N/A", hsn: "30049099", oldMrp: 0, mrp: 0, baseRate: 0, rate: 0, igst: 5, qty: 4, free: 0 },
    { id: "M43", name: "THECORT-6 TABS. ALU ALU", div: "MEDK", pack: "10X10", batch: "AT-2584", exp: "12/27", hsn: "30049085", oldMrp: 130, mrp: 1396.8, baseRate: 130, rate: 400, igst: 5, qty: 3, free: 0 },
    { id: "M44", name: "TOLETOP ET TAB", div: "MEDK", pack: "10X10", batch: "HT-2602", exp: "1/28", hsn: "30049099", oldMrp: 0, mrp: 1800, baseRate: 190, rate: 800, igst: 5, qty: 3, free: 0 },
    { id: "M45", name: "URSONIX 150 TAB", div: "MEDK", pack: "10X10", batch: "AT25100", exp: "9/27", hsn: "30049036", oldMrp: 1990, mrp: 1990, baseRate: 390, rate: 1000, igst: 5, qty: 2, free: 0 },
    { id: "M46", name: "EYRAB DSR CAP", div: "OTHE", pack: "10X10", batch: "251-C31", exp: "11/27", hsn: "30049099", oldMrp: 85, mrp: 1050, baseRate: 85, rate: 430, igst: 5, qty: 5, free: 0 }
];

// CACHE KEY v25 - Fixed Base Rate, S.No, and 1-Page Notice PDF
if (!localStorage.getItem("shreya_db_stock_v25")) localStorage.setItem("shreya_db_stock_v25", JSON.stringify(exactMasterData));
if (!localStorage.getItem("shreya_db_sales_v25")) localStorage.setItem("shreya_db_sales_v25", JSON.stringify([]));
if (!localStorage.getItem("shreya_db_counter_v25")) localStorage.setItem("shreya_db_counter_v25", "1");

let dbStock = JSON.parse(localStorage.getItem("shreya_db_stock_v25"));
let dbSales = JSON.parse(localStorage.getItem("shreya_db_sales_v25"));
let invCounter = parseInt(localStorage.getItem("shreya_db_counter_v25"));
let currentCart = [];

function formatDateForInput(dateStr) {
    if(!dateStr || dateStr === "N/A") return "";
    let parts = dateStr.split('/');
    if(parts.length === 3) {
        let d = parts[0].padStart(2, '0');
        let m = parts[1].padStart(2, '0');
        let y = parts[2];
        return `${y}-${m}-${d}`;
    }
    return "";
}

const formatMoney = (num) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(num);
const formatAmt = (num) => Number(num).toFixed(2);

// ================= AUTO START =================
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    setInterval(() => {
        let el = document.getElementById("clockDisplay");
        if(el) el.innerText = new Date().toLocaleTimeString('en-IN');
    }, 1000);
    renderCheatSheet();
    updateUI();
}

function renderCheatSheet() {
    let cb = document.getElementById("cheatSheetBody");
    if(!cb) return;
    cb.innerHTML = "";
    
    let searchTerm = getVal("cheatSearch").toLowerCase();
    let count = 1;

    dbStock.forEach(item => {
        if(item.mrp === 0) return; // Skip empty MRPs
        
        if(item.name.toLowerCase().includes(searchTerm)) {
            let calculatedDis = (((item.mrp - item.rate) / item.mrp) * 100).toFixed(2);
            cb.innerHTML += `
                <tr>
                    <td style="color:#94a3b8;">${count++}</td>
                    <td>${item.name}</td>
                    <td style="color:var(--text-muted);">₹${item.mrp}</td>
                    <td style="color:var(--primary); font-weight:800;">₹${item.rate}</td>
                    <td style="color:var(--secondary); font-weight:700;">${calculatedDis}%</td>
                </tr>
            `;
        }
    });
}

function switchTab(tab) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active-view'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    
    let tabEl = document.getElementById(`${tab}Tab`);
    if(tabEl) tabEl.classList.add('active-view');
    event.currentTarget.classList.add('active');
    
    const titles = { 'pos': 'Billing Terminal', 'inventory': 'Master Inventory', 'reports': 'Sales Ledger', 'cloud': 'Data Backup' };
    let pt = document.getElementById("pageTitle");
    if(pt) pt.innerText = titles[tab];
    
    if(tab === 'reports') renderReports();
}

function showToast(msg) {
    let t = document.getElementById("toast");
    if(t) {
        t.innerHTML = `<i class="fa-solid fa-check-circle" style="color:var(--accent);"></i> ${msg}`;
        t.classList.add("show");
        setTimeout(() => t.classList.remove("show"), 3000);
    } else {
        alert(msg);
    }
}

function toggleDueDate() {
    let mode = getVal("billPayMode");
    let box = document.getElementById("dueDateBox");
    if(box) box.style.display = mode === "Pending" ? "flex" : "none";
}

// ================= INVENTORY LOGIC =================
function toggleInventoryForm() {
    let form = document.getElementById("newMedicineForm");
    if(!form) return;
    
    if(form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
    
    document.getElementById("formTitle").innerText = "Add New Medicine";
    document.getElementById("saveMedBtn").innerHTML = "<i class='fa-solid fa-save'></i> Save Database";
    document.getElementById("editMedId").value = "";
    document.querySelectorAll('#newMedicineForm input').forEach(inp => inp.value = '');
}

function saveNewMedicine() {
    let editId = getVal("editMedId");
    let name = getVal("iName").trim().toUpperCase();
    
    let qty = parseFloat(getVal("iQty")) || 0;
    let freeQty = parseInt(getVal("iFree")) || 0;
    let baseRate = parseFloat(getVal("iBaseRate")) || 0;
    let rate = parseFloat(getVal("iRate")) || 0;
    let newMrp = parseFloat(getVal("iMrp")) || 0;
    let oldMrp = 0; // Keeping schema intact
    
    if(!name) { alert("Medicine name is required!"); return; }

    if(editId) {
        let idx = dbStock.findIndex(i => i.id === editId);
        if(idx !== -1) {
            dbStock[idx].name = name;
            dbStock[idx].div = getVal("iDiv").trim().toUpperCase();
            dbStock[idx].pack = getVal("iPack").trim().toUpperCase();
            dbStock[idx].batch = getVal("iBatch").trim().toUpperCase();
            dbStock[idx].exp = getVal("iExp").trim();
            dbStock[idx].hsn = getVal("iHsn").trim();
            dbStock[idx].qty = qty;
            dbStock[idx].free = freeQty;
            dbStock[idx].oldMrp = oldMrp;
            dbStock[idx].mrp = newMrp;
            dbStock[idx].baseRate = baseRate;
            dbStock[idx].rate = rate;
            dbStock[idx].igst = parseFloat(getVal("iIgst")) || 5;
            showToast("Medicine Updated!");
        }
    } else {
        let exIdx = dbStock.findIndex(i => i.name === name);
        if(exIdx !== -1) {
            dbStock[exIdx].qty += qty; dbStock[exIdx].free += freeQty; 
            dbStock[exIdx].baseRate = baseRate; dbStock[exIdx].rate = rate; 
            showToast(`Merged ${qty} stock!`);
        } else {
            dbStock.push({
                id: "M" + Date.now(), name, qty, free: freeQty, baseRate, rate,
                div: getVal("iDiv").trim().toUpperCase(),
                pack: getVal("iPack").trim().toUpperCase(),
                batch: getVal("iBatch").trim().toUpperCase() || "NEW",
                exp: getVal("iExp").trim() || "N/A",
                hsn: getVal("iHsn").trim(),
                oldMrp: oldMrp,
                mrp: newMrp,
                igst: parseFloat(getVal("iIgst")) || 5
            });
            showToast("New Medicine Saved!");
        }
    }
    localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
    document.getElementById("newMedicineForm").style.display = "none";
    updateUI(); 
    renderCheatSheet();
}

function modifyMedicine(id) {
    let item = dbStock.find(i => i.id === id);
    if(item) {
        let form = document.getElementById("newMedicineForm");
        if(form) form.style.display = "block";
        
        document.getElementById("formTitle").innerText = "Modify Medicine";
        document.getElementById("saveMedBtn").innerHTML = "<i class='fa-solid fa-pen'></i> Update Medicine";
        
        let safeSet = (eid, val) => { let e = document.getElementById(eid); if(e) e.value = val; };
        
        safeSet("editMedId", item.id);
        safeSet("iName", item.name);
        safeSet("iDiv", item.div);
        safeSet("iPack", item.pack);
        safeSet("iBatch", item.batch);
        safeSet("iExp", item.exp);
        safeSet("iHsn", item.hsn);
        safeSet("iQty", item.qty);
        safeSet("iFree", item.free || 0);
        safeSet("iMrp", item.mrp);
        safeSet("iBaseRate", item.baseRate || 0);
        safeSet("iRate", item.rate);
        safeSet("iIgst", item.igst);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function deleteMedicine(id) {
    if(confirm("Permanently delete this medicine?")) {
        dbStock = dbStock.filter(i => i.id !== id);
        localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
        updateUI(); 
        renderCheatSheet();
        showToast("Medicine Removed!");
    }
}

// ================= POS LOGIC =================
function autoFillDetails() {
    let id = getVal("billItem");
    let item = dbStock.find(s => s.id === id);
    if(item) {
        let safeSet = (eid, val) => { let e = document.getElementById(eid); if(e) e.value = val; };
        safeSet("billMrp", item.mrp);
        safeSet("billRealRate", item.rate);
        safeSet("billSellRate", item.mrp); 
        safeSet("billDiscount", 0);
        document.getElementById("billQty").focus();
    }
}

function addToCart() {
    let id = getVal("billItem");
    if(!id) return alert("Please select a Medicine!");

    let qty = parseFloat(getVal("billQty")) || 0;
    let free = parseInt(getVal("billFree")) || 0;
    let customRate = parseFloat(getVal("billSellRate"));
    let discount = parseFloat(getVal("billDiscount")) || 0;

    if(qty <= 0 && free <= 0) return alert("Quantity or Free Qty is required!");
    if(isNaN(customRate)) return alert("Sell Rate cannot be empty!");

    let dbItem = dbStock.find(s => s.id === id);
    if(!dbItem) return alert("Medicine not found!");
    
    if (qty > dbItem.qty) return alert(`Sirf ${dbItem.qty} regular stock bacha hai!`);
    if (free > (dbItem.free || 0)) return alert(`Sirf ${dbItem.free || 0} free stock bacha hai!`);

    let existing = currentCart.find(i => i.id === id && i.sellRate === customRate && i.discount === discount);
    
    if(existing) {
        existing.billQty += qty; 
        existing.billFree += free;
    } else {
        currentCart.push({ ...dbItem, billQty: qty, billFree: free, sellRate: customRate, discount: discount });
    }

    let safeSet = (eid, val) => { let e = document.getElementById(eid); if(e) e.value = val; };
    safeSet("billQty", 1);
    safeSet("billFree", 0);
    safeSet("billDiscount", 0);
    safeSet("billItem", "");
    safeSet("posSearch", ""); 
    
    updateUI(); 
    renderCart(); 
    showToast("Added to Invoice");
}

function removeCart(index) { currentCart.splice(index, 1); renderCart(); }

function renderCart() {
    let tbody = document.getElementById("cartBody"); 
    if(!tbody) return;
    tbody.innerHTML = "";
    
    let sumQty = 0, sumTaxable = 0, sumIgst = 0;

    currentCart.forEach((item, index) => {
        let baseValue = item.sellRate * item.billQty;
        let discountAmt = (baseValue * item.discount) / 100;
        let taxableValue = baseValue - discountAmt;
        let igstAmt = (taxableValue * item.igst) / 100;
        
        sumQty += item.billQty; sumTaxable += taxableValue; sumIgst += igstAmt;

        tbody.innerHTML += `
            <tr>
                <td><strong>${item.name}</strong><br><span style="font-size:11px; color:gray;">Pack: ${item.pack}</span></td>
                <td><strong>${item.billQty}</strong></td>
                <td>${item.billFree}</td>
                <td>₹${formatAmt(item.sellRate)}</td> <!-- Shown as MRP now -->
                <td style="color:var(--secondary);">${item.discount}%</td>
                <td>${item.igst}%</td>
                <td style="color:var(--primary); font-weight:800;">₹${formatAmt(taxableValue)}</td> <!-- Shown as Rate now -->
                <td><button class="btn-icon" onclick="removeCart(${index})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    });

    let grandTotal = sumTaxable + sumIgst;
    document.getElementById("sumItems").innerText = currentCart.length;
    document.getElementById("sumQty").innerText = sumQty;
    document.getElementById("sumTaxable").innerText = formatMoney(sumTaxable);
    document.getElementById("sumIgst").innerText = formatMoney(sumIgst);
    document.getElementById("sumGrandTotal").innerText = formatMoney(grandTotal);
}

// ================= GENERATE BILL =================
function generateBill() {
    let customer = getVal("billCustomer").trim() || "CASH SALE";
    let payMode = getVal("billPayMode");
    let dueDate = getVal("billDueDate") || "N/A";

    if(currentCart.length === 0) return alert("Cart khali hai, pehle medicine add karo!");

    let manualInvNo = getVal("posInvNo").trim();
    let manualDate = getVal("posDate"); 
    
    let invNo = manualInvNo || ("INV-" + String(invCounter).padStart(4, '0'));
    
    let dateStr;
    if(manualDate) {
        let d = new Date(manualDate);
        dateStr = d.toLocaleDateString('en-IN');
    } else {
        dateStr = new Date().toLocaleDateString('en-IN');
    }

    let pBody = document.getElementById("pCartBody"); pBody.innerHTML = "";
    let sumQty = 0, sumTaxable = 0, sumIgst = 0;

    currentCart.forEach((item, i) => {
        let mItem = dbStock.find(m => m.id === item.id);
        if(mItem) {
            mItem.qty -= item.billQty; 
            mItem.free -= item.billFree; 
        }

        let baseValue = item.sellRate * item.billQty;
        let discountAmt = (baseValue * item.discount) / 100;
        let taxableValue = baseValue - discountAmt;
        let igstAmt = (taxableValue * item.igst) / 100;
        
        sumQty += item.billQty; sumTaxable += taxableValue; sumIgst += igstAmt;

        pBody.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td style="text-align:left;"><strong>${item.name}</strong></td>
                <td>${item.pack}</td>
                <td>${item.batch}</td>
                <td>${item.exp}</td>
                <td>${item.billQty}</td>
                <td>${item.billFree}</td>
                <td>${formatAmt(item.sellRate)}</td>
                <td>${item.discount}%</td>
                <td>${formatAmt(taxableValue)}</td>
                <td>${item.igst}%</td>
                <td style="text-align:right;">${formatAmt(taxableValue + igstAmt)}</td>
            </tr>
        `;
    });

    let grandTotal = sumTaxable + sumIgst;

    dbSales.push({ 
        invNo, date: dateStr, customer, items: currentCart.length, 
        taxable: sumTaxable, igst: sumIgst, total: grandTotal,
        payMode: payMode, dueDate: dueDate,
        cart: currentCart
    });
    
    if(!manualInvNo) { invCounter++; }
    
    localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
    localStorage.setItem("shreya_db_sales_v25", JSON.stringify(dbSales));
    localStorage.setItem("shreya_db_counter_v25", invCounter);

    document.getElementById("pCustomer").innerText = customer;
    document.getElementById("pInvNo").innerText = invNo;
    document.getElementById("pDate").innerText = dateStr;
    document.getElementById("pTotItems").innerText = currentCart.length;
    document.getElementById("pTotQty").innerText = sumQty;
    document.getElementById("pPayStatus").innerText = payMode === "Pending" ? `Pending (Due: ${dueDate})` : "Paid";
    document.getElementById("pTaxable").innerText = formatAmt(sumTaxable);
    document.getElementById("pTotalIgst").innerText = formatAmt(sumIgst);
    document.getElementById("pGrandTotal").innerText = formatAmt(grandTotal);

    currentCart = []; 
    document.getElementById("billCustomer").value = "";
    document.getElementById("posInvNo").value = ""; 
    document.getElementById("posDate").value = "";  
    updateUI(); 
    
    document.getElementById("invoicePrint").style.display = "block";
    document.getElementById("noticePrint").style.display = "none";

    showToast("Opening Print Dialog...");
    setTimeout(() => { window.print(); }, 500);
}

// ================= VIEW BILL LOGIC =================
function viewBill(index) {
    let sale = dbSales[index];
    
    let pBody = document.getElementById("pCartBody"); pBody.innerHTML = "";
    let sumQty = 0;

    sale.cart.forEach((item, i) => {
        let baseValue = item.sellRate * item.billQty;
        let discountAmt = (baseValue * item.discount) / 100;
        let taxableValue = baseValue - discountAmt;
        let igstAmt = (taxableValue * item.igst) / 100;
        sumQty += item.billQty; 

        pBody.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td style="text-align:left;"><strong>${item.name}</strong></td>
                <td>${item.pack}</td>
                <td>${item.batch}</td>
                <td>${item.exp}</td>
                <td>${item.billQty}</td>
                <td>${item.billFree}</td>
                <td>${formatAmt(item.sellRate)}</td> <!-- MRP -->
                <td>${item.discount}%</td>
                <td>${formatAmt(taxableValue)}</td> <!-- Rate -->
                <td>${item.igst}%</td>
                <td style="text-align:right;">${formatAmt(taxableValue + igstAmt)}</td>
            </tr>
        `;
    });

    document.getElementById("pCustomer").innerText = sale.customer;
    document.getElementById("pInvNo").innerText = sale.invNo;
    document.getElementById("pDate").innerText = sale.date;
    document.getElementById("pTotItems").innerText = sale.cart.length;
    document.getElementById("pTotQty").innerText = sumQty;
    document.getElementById("pPayStatus").innerText = sale.payMode === "Pending" ? `Pending (Due: ${sale.dueDate})` : "Paid";
    document.getElementById("pTaxable").innerText = formatAmt(sale.taxable);
    document.getElementById("pTotalIgst").innerText = formatAmt(sale.igst);
    document.getElementById("pGrandTotal").innerText = formatAmt(sale.total);

    document.getElementById("invoicePrint").style.display = "block";
    document.getElementById("noticePrint").style.display = "none";

    showToast("Opening View/Print Mode...");
    setTimeout(() => { window.print(); }, 500);
}

// ================= OVERDUE NOTICE =================
function generateNotice(index) {
    let sale = dbSales[index];
    
    document.getElementById("invoicePrint").style.display = "none";
    document.getElementById("noticePrint").style.display = "block";
    
    document.getElementById("nCustomer").innerText = sale.customer;
    document.getElementById("nInvNo").innerText = sale.invNo;
    document.getElementById("nDate").innerText = sale.date;
    document.getElementById("nDueDate").innerText = sale.dueDate;
    document.getElementById("nAmount").innerText = formatMoney(sale.total);
    
    showToast("Generating Due Notice...");
    setTimeout(() => {
        window.print();
        document.getElementById("invoicePrint").style.display = "block";
        document.getElementById("noticePrint").style.display = "none";
    }, 500);
}

// ================= EDIT BILL LOGIC =================
function editBill(index) {
    if(confirm("Edit this bill? It will be loaded back into the POS Terminal. Invoice Number & Date will remain locked!")) {
        let sale = dbSales[index];
        
        if(sale.cart && sale.cart.length > 0) {
            sale.cart.forEach(cartItem => {
                let stockItem = dbStock.find(m => m.id === cartItem.id);
                if(stockItem) {
                    stockItem.qty += cartItem.billQty;
                    if(cartItem.billFree) stockItem.free += cartItem.billFree;
                }
            });
        }

        currentCart = [...sale.cart];
        document.getElementById("billCustomer").value = sale.customer;
        document.getElementById("billPayMode").value = sale.payMode;
        if(sale.payMode === 'Pending') {
            document.getElementById("dueDateBox").style.display = 'flex';
            document.getElementById("billDueDate").value = sale.dueDate;
        }

        document.getElementById("posInvNo").value = sale.invNo;
        document.getElementById("posDate").value = formatDateForInput(sale.date);

        dbSales.splice(index, 1);
        
        localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
        localStorage.setItem("shreya_db_sales_v25", JSON.stringify(dbSales));
        
        switchTab('pos');
        updateUI();
        showToast("Bill loaded for editing! Invoice Number is Locked.");
    }
}

// ================= DELETE & RENUMBER LOGIC =================
function deleteTransaction(index) {
    if(confirm("Are you sure you want to delete this bill? Invoice numbers will auto-update.")) {
        let sale = dbSales[index];
        
        if(sale.cart && sale.cart.length > 0) {
            sale.cart.forEach(cartItem => {
                let stockItem = dbStock.find(m => m.id === cartItem.id);
                if(stockItem) {
                    stockItem.qty += cartItem.billQty;
                    if(cartItem.billFree) stockItem.free += cartItem.billFree;
                }
            });
        }

        dbSales.splice(index, 1);
        
        dbSales.forEach((s, idx) => {
            s.invNo = "INV-" + String(idx + 1).padStart(4, '0');
        });
        invCounter = dbSales.length + 1; 

        localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
        localStorage.setItem("shreya_db_sales_v25", JSON.stringify(dbSales));
        localStorage.setItem("shreya_db_counter_v25", invCounter);
        
        renderReports();
        updateUI();
        showToast("Bill Deleted & Invoices Auto-Updated!");
    }
}

// ================= CLOUD BACKUP =================
function exportData() {
    let dataObj = { stock: dbStock, sales: dbSales, counter: invCounter };
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObj));
    let dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", "Shreya_Pharma_Backup.json");
    document.body.appendChild(dl); dl.click(); dl.remove();
    showToast("Backup Downloaded!");
}

function importData() {
    let fileInput = document.getElementById('importFile');
    if (!fileInput.files.length) return showToast("Select a file first!");
    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            let dataObj = JSON.parse(e.target.result);
            if (dataObj.stock && dataObj.sales) {
                dbStock = dataObj.stock; dbSales = dataObj.sales;
                if(dataObj.counter) invCounter = dataObj.counter;
                localStorage.setItem("shreya_db_stock_v25", JSON.stringify(dbStock));
                localStorage.setItem("shreya_db_sales_v25", JSON.stringify(dbSales));
                localStorage.setItem("shreya_db_counter_v25", invCounter);
                updateUI(); renderCheatSheet(); showToast("Data Restored!");
            } else { showToast("Invalid Backup!"); }
        } catch(err) { showToast("Error Reading File!"); }
    };
    reader.readAsText(fileInput.files[0]);
}

// ================= RENDER UI =================
function updateUI() {
    let invSearchTerm = getVal("invSearch").toLowerCase();
    let posSearchTerm = getVal("posSearch").toLowerCase();

    let invBody = document.getElementById("inventoryBody");
    let billItem = document.getElementById("billItem");
    
    if(invBody) invBody.innerHTML = ""; 
    if(billItem) billItem.innerHTML = '<option value="" disabled selected>-- Select Product --</option>';

    let count = 1;

    dbStock.forEach((item, i) => {
        if(invBody && item.name.toLowerCase().includes(invSearchTerm)) {
            let stockColor = item.qty < 3 ? "color:#ef4444; font-weight:900;" : "color:var(--primary); font-weight:800;";
            let stockBadge = item.qty < 3 ? `<span style="background:#ef4444; color:white; padding:2px 5px; border-radius:3px; font-size:9px; margin-left:5px;">Low Stock</span>` : "";

            invBody.innerHTML += `
                <tr>
                    <td>${count++}</td>
                    <td><strong>${item.name}</strong></td>
                    <td><span style="background:#e2e8f0; padding:2px 6px; border-radius:5px; font-size:11px;">${item.pack}</span></td>
                    <td>${item.batch} / ${item.exp}</td>
                    <td class="text-muted">₹${formatAmt(item.mrp)}</td>
                    <td class="text-muted">₹${formatAmt(item.baseRate || 0)}</td>
                    <td>₹${formatAmt(item.rate)}</td>
                    <td style="${stockColor}; font-size:16px;">${item.qty} ${stockBadge}</td>
                    <td style="color:var(--accent); font-weight:800; font-size:16px;">${item.free || 0}</td>
                    <td>
                        <button class="btn-icon edit" onclick="modifyMedicine('${item.id}')"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-icon" onclick="deleteMedicine('${item.id}')"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
        }

        if(billItem && (item.qty > 0 || item.free > 0) && item.name.toLowerCase().includes(posSearchTerm)) {
            billItem.innerHTML += `<option value="${item.id}">${item.name} (Pack: ${item.pack}) - Stock: ${item.qty} | Free: ${item.free || 0}</option>`;
        }
    });
    renderCart();
}

function renderReports() {
    let tRev = 0, tIgst = 0;
    let rBody = document.getElementById("reportsBody"); 
    if(!rBody) return;
    rBody.innerHTML = "";

    let today = new Date();
    today.setHours(0,0,0,0);

    [...dbSales].reverse().forEach((sale, index) => {
        tRev += sale.total; tIgst += sale.igst; 
        
        let isOverdue = false;
        if(sale.payMode === 'Pending' && sale.dueDate !== 'N/A') {
            let dueD = new Date(sale.dueDate);
            if(dueD < today) isOverdue = true;
        }

        let payStatusHtml = sale.payMode === "Pending" ? `<span style="color:var(--danger); font-weight:700;">Pending</span>` : `<span style="color:var(--accent); font-weight:700;">Paid</span>`;
        let originalIndex = dbSales.length - 1 - index;

        let overdueBadge = isOverdue ? `
            <div style="margin-top:5px; display:inline-flex; align-items:center; gap:5px; background:#fee2e2; padding:2px 8px; border-radius:20px; border:1px solid #fca5a5;">
                <span style="color:var(--danger); font-size:10px; font-weight:bold;">Overdue</span>
                <button style="background:none; border:none; color:var(--danger); cursor:pointer;" title="Send Notice" onclick="generateNotice(${originalIndex})"><i class="fa-solid fa-paper-plane"></i></button>
            </div>` : "";

        rBody.innerHTML += `
            <tr>
                <td><strong>${sale.invNo}</strong></td>
                <td>${sale.date}</td>
                <td>${sale.customer}</td>
                <td>₹${formatAmt(sale.taxable)}</td> <!-- Rate Label -->
                <td>₹${formatAmt(sale.igst)}</td>
                <td style="color:var(--secondary); font-weight:800;">₹${formatAmt(sale.total)}</td>
                <td>
                    ${payStatusHtml}
                    ${overdueBadge}
                </td>
                <td style="min-width: 140px;">
                    <button class="btn-icon" style="background:#e0e7ff; color:var(--secondary);" title="View Bill" onclick="viewBill(${originalIndex})"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn-icon edit" title="Edit Bill" onclick="editBill(${originalIndex})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-icon" title="Delete Bill & Revert Stock" onclick="deleteTransaction(${originalIndex})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    });

    let repRev = document.getElementById("repRev");
    if(repRev) repRev.innerText = formatMoney(tRev);
    
    let manualIgst = localStorage.getItem("shreya_igst_final_v25");
    let repIgstTotal = document.getElementById("repIgstTotal");
    if(repIgstTotal) {
        if(manualIgst !== null) repIgstTotal.innerText = formatMoney(parseFloat(manualIgst)) + " (M)";
        else repIgstTotal.innerText = formatMoney(tIgst);
    }
}

function editIgstTotal() {
    let currentManual = localStorage.getItem("shreya_igst_final_v25");
    let input = prompt("Enter manual IGST collected amount (Leave blank to auto-calculate):", currentManual || "");
    if(input !== null) {
        if(input.trim() === "") {
            localStorage.removeItem("shreya_igst_final_v25"); showToast("IGST set to Auto!");
        } else {
            localStorage.setItem("shreya_igst_final_v25", parseFloat(input)); showToast("IGST Updated!");
        }
        renderReports();
    }
}