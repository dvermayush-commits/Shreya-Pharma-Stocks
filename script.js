// ================= SAFE DOM HELPER =================
function getVal(id) { let el = document.getElementById(id); return el ? el.value : ""; }

// ================= MASTER DATA & ALL 50 ITEMS =================
const exactMasterData = [
    { id: "M1", name: "MEDIVIT TAB", div: "MEDI", pack: "10X1X1", batch: "RST-7169", exp: "4/27", hsn: "21069099", oldMrp: 0, mrp: 1800, rate: 170, igst: 5, qty: 2, free: 0 },
    { id: "M2", name: "XIMBEX-AZL TAB", div: "MEDI", pack: "10X10", batch: "TB25428", exp: "10/27", hsn: "30042019", oldMrp: 3000, mrp: 2820, rate: 750, igst: 5, qty: 5, free: 0 },
    { id: "M3", name: "ASOKLIN SP TAB SILVER", div: "MEDK", pack: "10X10", batch: "HT-26052", exp: "4/28", hsn: "30049069", oldMrp: 1500, mrp: 1125, rate: 90, igst: 5, qty: 8, free: 0 },
    { id: "M4", name: "ASOKLIN SP TAB RED", div: "MEDK", pack: "10X10", batch: "TG26-035", exp: "2/28", hsn: "30049069", oldMrp: 0, mrp: 1000, rate: 90, igst: 5, qty: 6, free: 0 },
    { id: "M5", name: "BALAKLIN LC TAB", div: "MEDK", pack: "10X1X1", batch: "MFT-2616", exp: "2/28", hsn: "21069099", oldMrp: 2200, mrp: 2000, rate: 160, igst: 5, qty: 2, free: 0 },
    { id: "M6", name: "BOSSKID ADE SYP", div: "MEDK", pack: "200ML", batch: "MFL-2597", exp: "8/27", hsn: "21069099", oldMrp: 0, mrp: 210, rate: 25, igst: 5, qty: 10, free: 0 },
    { id: "M7", name: "CALCIBONE GUMMY", div: "MEDK", pack: "1*30", batch: "ASG-2602", exp: "8/27", hsn: "21069099", oldMrp: 350, mrp: 328.15, rate: 80, igst: 5, qty: 6, free: 0 },
    { id: "M8", name: "DIZIREX-16", div: "MEDK", pack: "10*10", batch: "AT251211", exp: "11/27", hsn: "30049099", oldMrp: 950, mrp: 890.6, rate: 70, igst: 5, qty: 2, free: 0 },
    { id: "M9", name: "DIZIREX-8 TAB", div: "MEDK", pack: "20X10", batch: "AT251211", exp: "11/27", hsn: "30049099", oldMrp: 880, mrp: 880, rate: 90, igst: 5, qty: 2, free: 0 },
    { id: "M10", name: "DR PAD MEDKLEIN", div: "MEDK", pack: "1", batch: "N/A", exp: "N/A", hsn: "48201090", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 5, free: 0 },
    { id: "M11", name: "EBAZEST 20 TAB", div: "MEDK", pack: "10X10", batch: "AT260214", exp: "1/28", hsn: "30049099", oldMrp: 1000, mrp: 937.5, rate: 90, igst: 5, qty: 3, free: 0 },
    { id: "M12", name: "ESMOKLIN-KID SACHET", div: "MEDK", pack: "10X1GM", batch: "G-51925", exp: "2/27", hsn: "30049099", oldMrp: 300, mrp: 300, rate: 50, igst: 5, qty: 2, free: 0 },
    { id: "M13", name: "FACTORANGE SYP", div: "MEDK", pack: "200ML", batch: "ME-318", exp: "10/27", hsn: "48201090", oldMrp: 0, mrp: 199, rate: 20, igst: 5, qty: 20, free: 0 },
    { id: "M14", name: "FASNOL MF 250 SUS", div: "MEDK", pack: "60ML", batch: "AL26030", exp: "2/28", hsn: "30049069", oldMrp: 80, mrp: 75, rate: 15, igst: 5, qty: 25, free: 0 },
    { id: "M15", name: "GABAKLIN NT TAB", div: "MEDK", pack: "10X1X1", batch: "AT26031", exp: "2/28", hsn: "30049099", oldMrp: 1650, mrp: 1600, rate: 150, igst: 5, qty: 2, free: 0 },
    { id: "M16", name: "GRISOWIN 500 TAB", div: "MEDK", pack: "10X10", batch: "AT26021", exp: "1/28", hsn: "30049099", oldMrp: 1850, mrp: 1734.3, rate: 540, igst: 5, qty: 2, free: 0 },
    { id: "M17", name: "GUDZINC DHA ICECREAM", div: "MEDK", pack: "200GM", batch: "ME-58", exp: "8/27", hsn: "21069099", oldMrp: 280, mrp: 350, rate: 32, igst: 5, qty: 15, free: 0 },
    { id: "M18", name: "GUDZINC TAB", div: "MEDK", pack: "10X1X1", batch: "FT25100", exp: "3/27", hsn: "21069099", oldMrp: 1199, mrp: 1070, rate: 180, igst: 5, qty: 3, free: 0 },
    { id: "M19", name: "GYNOPLUS SYP", div: "MEDK", pack: "200ML", batch: "ME-187", exp: "3/29", hsn: "30049099", oldMrp: 0, mrp: 185, rate: 20, igst: 5, qty: 10, free: 0 },
    { id: "M20", name: "HERFIX 400 TAB", div: "MEDK", pack: "10X10", batch: "AT26031", exp: "2/28", hsn: "30049099", oldMrp: 1528, mrp: 1459.5, rate: 260, igst: 5, qty: 2, free: 0 },
    { id: "M21", name: "KELINIM PLUS GOLDEN", div: "MEDK", pack: "20X10", batch: "AT-26A8", exp: "12/27", hsn: "30049099", oldMrp: 1118, mrp: 1118, rate: 90, igst: 5, qty: 5, free: 0 },
    { id: "M22", name: "KETOGAIN 200 TAB", div: "MEDK", pack: "10X10", batch: "AT25100", exp: "9/27", hsn: "30049099", oldMrp: 1900, mrp: 1800, rate: 150, igst: 5, qty: 3, free: 0 },
    { id: "M23", name: "KLIACET 10 TAB", div: "MEDK", pack: "10X10", batch: "25F-T988", exp: "8/27", hsn: "30049099", oldMrp: 700, mrp: 656.25, rate: 50, igst: 5, qty: 5, free: 0 },
    { id: "M24", name: "KLIACET 5 TAB", div: "MEDK", pack: "10X10", batch: "25K-T216", exp: "1/28", hsn: "30049029", oldMrp: 350, mrp: 320, rate: 35, igst: 5, qty: 5, free: 0 },
    { id: "M25", name: "KLIACET AM TAB", div: "MEDK", pack: "10X10", batch: "ST-25358", exp: "9/27", hsn: "30049099", oldMrp: 650, mrp: 650, rate: 70, igst: 5, qty: 3, free: 0 },
    { id: "M26", name: "KLIACET MT TAB", div: "MEDK", pack: "10X10", batch: "AT-26C10", exp: "2/28", hsn: "30049099", oldMrp: 1199, mrp: 1999, rate: 90, igst: 5, qty: 3, free: 0 },
    { id: "M27", name: "KLINMOL 500 SUS", div: "MEDK", pack: "60ML", batch: "AL26030", exp: "2/28", hsn: "30049069", oldMrp: 99, mrp: 99, rate: 20, igst: 5, qty: 30, free: 0 },
    { id: "M28", name: "KLINSHEL K27 CAP", div: "MEDK", pack: "10X1X1", batch: "ZBC-143", exp: "11/27", hsn: "21069099", oldMrp: 2500, mrp: 1900, rate: 120, igst: 5, qty: 3, free: 0 },
    { id: "M29", name: "KLINSHEL-M TAB", div: "MEDK", pack: "10X10", batch: "RFT-1500", exp: "2/27", hsn: "21069099", oldMrp: 3100, mrp: 3100, rate: 80, igst: 5, qty: 2, free: 0 },
    { id: "M30", name: "KLINTHIA 100 TAB", div: "MEDK", pack: "10X10", batch: "26B-T165", exp: "10/27", hsn: "21069099", oldMrp: 1500, mrp: 1500, rate: 90, igst: 5, qty: 3, free: 0 },
    { id: "M31", name: "KLINZICEF 200DT TAB", div: "MEDK", pack: "10X10", batch: "T250618", exp: "11/27", hsn: "30049029", oldMrp: 1094.2, mrp: 1044.7, rate: 360, igst: 5, qty: 2, free: 0 },
    { id: "M32", name: "LANOKLIN 15 TAB", div: "MEDK", pack: "10X10", batch: "AT25090", exp: "8/27", hsn: "30049099", oldMrp: 760, mrp: 760, rate: 80, igst: 5, qty: 2, free: 0 },
    { id: "M33", name: "MOXBEX CV 625 TAB", div: "MEDK", pack: "10X10", batch: "TB26-00", exp: "3/28", hsn: "30049099", oldMrp: 2085.4, mrp: 1967.7, rate: 530, igst: 5, qty: 3, free: 0 },
    { id: "M34", name: "MYCLARIX 250 TAB", div: "MEDK", pack: "10X10", batch: "AT25121", exp: "11/27", hsn: "30049099", oldMrp: 0, mrp: 2570.4, rate: 630, igst: 5, qty: 2, free: 0 },
    { id: "M35", name: "MYCLARIX 500 TAB", div: "MEDK", pack: "10X10", batch: "AT25121", exp: "11/27", hsn: "48192020", oldMrp: 1200, mrp: 4255.6, rate: 1200, igst: 5, qty: 2, free: 0 },
    { id: "M36", name: "MYCLARIX DRY SYP", div: "MEDK", pack: "30ML", batch: "DS26007", exp: "2/28", hsn: "30049099", oldMrp: 154.56, mrp: 148.9, rate: 26.5, igst: 5, qty: 10, free: 0 },
    { id: "M37", name: "NORSHE 5 TAB", div: "MEDK", pack: "10X10", batch: "HT-2604", exp: "3/28", hsn: "30049099", oldMrp: 603.6, mrp: 575.4, rate: 70, igst: 5, qty: 2, free: 0 },
    { id: "M38", name: "NUFYLINE 400 TAB", div: "MEDK", pack: "10X10", batch: "AT25111", exp: "10/27", hsn: "30049099", oldMrp: 150, mrp: 849, rate: 150, igst: 5, qty: 2, free: 0 },
    { id: "M39", name: "OFOKLIN FORTE SUS", div: "MEDK", pack: "30ML", batch: "AL25090", exp: "8/27", hsn: "30042039", oldMrp: 20, mrp: 84, rate: 20, igst: 5, qty: 30, free: 0 },
    { id: "M40", name: "PAPIFY TAB", div: "MEDK", pack: "10X1X1", batch: "VH-T193", exp: "10/27", hsn: "30041090", oldMrp: 3000, mrp: 3000, rate: 120, igst: 5, qty: 2, free: 0 },
    { id: "M41", name: "RANTIGO SYP", div: "MEDK", pack: "100ML", batch: "AL26040", exp: "9/27", hsn: "30049099", oldMrp: 134, mrp: 112.5, rate: 17, igst: 5, qty: 20, free: 0 },
    { id: "M42", name: "SS BOTTLES", div: "MEDK", pack: "1", batch: "N/A", exp: "N/A", hsn: "30049099", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 4, free: 0 },
    { id: "M43", name: "THECORT-6 TABS", div: "MEDK", pack: "10X10", batch: "AT-2584", exp: "12/27", hsn: "30049085", oldMrp: 130, mrp: 1396.8, rate: 130, igst: 5, qty: 3, free: 0 },
    { id: "M44", name: "TOLETOP ET TAB", div: "MEDK", pack: "10X10", batch: "HT-2602", exp: "1/28", hsn: "30049099", oldMrp: 0, mrp: 1800, rate: 190, igst: 5, qty: 3, free: 0 },
    { id: "M45", name: "URSONIX 150 TAB", div: "MEDK", pack: "10X10", batch: "AT25100", exp: "9/27", hsn: "30049036", oldMrp: 1990, mrp: 1990, rate: 390, igst: 5, qty: 2, free: 0 },
    { id: "M46", name: "EYRAB DSR CAP", div: "OTHE", pack: "10X10", batch: "251-C31", exp: "11/27", hsn: "30049099", oldMrp: 85, mrp: 1050, rate: 85, igst: 5, qty: 5, free: 0 },
    { id: "M47", name: "VISUAL AID PART 1", div: "-BLA", pack: "1", batch: "N/A", exp: "N/A", hsn: "39239090", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 1, free: 0 },
    { id: "M48", name: "VISUAL AID PART 2", div: "-BLA", pack: "1", batch: "N/A", exp: "N/A", hsn: "39239090", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 1, free: 0 },
    { id: "M49", name: "VISUAL AID PART 3", div: "-BLA", pack: "1", batch: "N/A", exp: "N/A", hsn: "39239090", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 1, free: 0 },
    { id: "M50", name: "PROMO MATERIAL", div: "-BLA", pack: "1", batch: "N/A", exp: "N/A", hsn: "39239090", oldMrp: 0, mrp: 0, rate: 0, igst: 5, qty: 1, free: 0 }
];

// CACHE KEY v20 - Adds Search Capability
if (!localStorage.getItem("shreya_db_stock_v20")) localStorage.setItem("shreya_db_stock_v20", JSON.stringify(exactMasterData));
if (!localStorage.getItem("shreya_db_sales_v20")) localStorage.setItem("shreya_db_sales_v20", JSON.stringify([]));
if (!localStorage.getItem("shreya_db_counter_v20")) localStorage.setItem("shreya_db_counter_v20", "1");

let dbStock = JSON.parse(localStorage.getItem("shreya_db_stock_v20"));
let dbSales = JSON.parse(localStorage.getItem("shreya_db_sales_v20"));
let invCounter = parseInt(localStorage.getItem("shreya_db_counter_v20"));
let currentCart = [];

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
    updateUI();
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
    let rate = parseFloat(getVal("iRate")) || 0;
    let newMrp = parseFloat(getVal("iMrp")) || 0;
    let oldMrp = parseFloat(getVal("iOldMrp")) || 0;
    
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
            dbStock[idx].rate = rate;
            dbStock[idx].igst = parseFloat(getVal("iIgst")) || 5;
            showToast("Medicine Updated!");
        }
    } else {
        let exIdx = dbStock.findIndex(i => i.name === name);
        if(exIdx !== -1) {
            dbStock[exIdx].qty += qty; dbStock[exIdx].free += freeQty; dbStock[exIdx].rate = rate; 
            showToast(`Merged ${qty} stock!`);
        } else {
            dbStock.push({
                id: "M" + Date.now(), name, qty, free: freeQty, rate,
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
    localStorage.setItem("shreya_db_stock_v20", JSON.stringify(dbStock));
    
    document.getElementById("newMedicineForm").style.display = "none";
    updateUI(); 
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
        safeSet("iOldMrp", item.oldMrp);
        safeSet("iMrp", item.mrp);
        safeSet("iRate", item.rate);
        safeSet("iIgst", item.igst);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function deleteMedicine(id) {
    if(confirm("Permanently delete this medicine?")) {
        dbStock = dbStock.filter(i => i.id !== id);
        localStorage.setItem("shreya_db_stock_v20", JSON.stringify(dbStock));
        updateUI(); showToast("Medicine Removed!");
    }
}

// ================= POS =================
function autoFillDetails() {
    let id = getVal("billItem");
    let item = dbStock.find(s => s.id === id);
    if(item) {
        let safeSet = (eid, val) => { let e = document.getElementById(eid); if(e) e.value = val; };
        safeSet("billMrp", item.mrp);
        safeSet("billRealRate", item.rate);
        safeSet("billSellRate", item.mrp); // CUSTOM SELL RATE = N.MRP
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
    
    if (qty > dbItem.qty) return alert(`Only ${dbItem.qty} regular stock left!`);
    if (free > (dbItem.free || 0)) return alert(`Only ${dbItem.free || 0} free stock left!`);

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
    safeSet("posSearch", ""); // Clear search after add
    
    updateUI(); // Refresh list to reflect stock changes logically
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
                <td>₹${formatAmt(item.sellRate)}</td>
                <td style="color:var(--secondary);">${item.discount}%</td>
                <td>${item.igst}%</td>
                <td style="color:var(--primary); font-weight:800;">₹${formatAmt(taxableValue)}</td>
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

// ================= GENERATE PDF =================
function generateBill() {
    let customer = getVal("billCustomer").trim() || "CASH SALE";
    let payMode = getVal("billPayMode");
    let dueDate = getVal("billDueDate") || "N/A";

    if(currentCart.length === 0) return alert("Cart is empty!");

    let invNo = "INV-" + String(invCounter).padStart(4, '0');
    let dateStr = new Date().toLocaleDateString('en-IN');

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
    
    invCounter++; 
    localStorage.setItem("shreya_db_stock_v20", JSON.stringify(dbStock));
    localStorage.setItem("shreya_db_sales_v20", JSON.stringify(dbSales));
    localStorage.setItem("shreya_db_counter_v20", invCounter);

    document.getElementById("pCustomer").innerText = customer;
    document.getElementById("pInvNo").innerText = invNo;
    document.getElementById("pDate").innerText = dateStr;
    document.getElementById("pTotItems").innerText = currentCart.length;
    document.getElementById("pTotQty").innerText = sumQty;
    document.getElementById("pPayStatus").innerText = payMode === "Pending" ? `Pending (Due: ${dueDate})` : "Paid";
    document.getElementById("pTaxable").innerText = formatAmt(sumTaxable);
    document.getElementById("pTotalIgst").innerText = formatAmt(sumIgst);
    document.getElementById("pGrandTotal").innerText = formatAmt(grandTotal);

    currentCart = []; document.getElementById("billCustomer").value = "";
    updateUI(); showToast("Opening Print Dialog...");

    setTimeout(() => {
        window.print();
    }, 500);
}

// ================= REVERT / DELETE LOGIC =================
function deleteTransaction(index) {
    if(confirm("Are you sure you want to delete this bill? All items will be added back to your stock.")) {
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
        localStorage.setItem("shreya_db_stock_v20", JSON.stringify(dbStock));
        localStorage.setItem("shreya_db_sales_v20", JSON.stringify(dbSales));
        
        renderReports();
        updateUI();
        showToast("Bill Deleted & Stock Reverted!");
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
                localStorage.setItem("shreya_db_stock_v20", JSON.stringify(dbStock));
                localStorage.setItem("shreya_db_sales_v20", JSON.stringify(dbSales));
                localStorage.setItem("shreya_db_counter_v20", invCounter);
                updateUI(); showToast("Data Restored!");
            } else { showToast("Invalid Backup!"); }
        } catch(err) { showToast("Error Reading File!"); }
    };
    reader.readAsText(fileInput.files[0]);
}

// ================= RENDER UI WITH SEARCH LOGIC =================
function updateUI() {
    let invSearchTerm = getVal("invSearch").toLowerCase();
    let posSearchTerm = getVal("posSearch").toLowerCase();

    let invBody = document.getElementById("inventoryBody");
    let billItem = document.getElementById("billItem");
    
    if(invBody) invBody.innerHTML = ""; 
    if(billItem) billItem.innerHTML = '<option value="" disabled selected>-- Select Product --</option>';

    dbStock.forEach((item, i) => {
        // Render Inventory (Applying Search Filter)
        if(invBody && item.name.toLowerCase().includes(invSearchTerm)) {
            invBody.innerHTML += `
                <tr>
                    <td><strong>${item.name}</strong></td>
                    <td><span style="background:#e2e8f0; padding:2px 6px; border-radius:5px; font-size:11px;">${item.pack}</span></td>
                    <td>${item.batch} / ${item.exp}</td>
                    <td class="text-muted">₹${formatAmt(item.mrp)}</td>
                    <td>₹${formatAmt(item.rate)}</td>
                    <td style="color:var(--primary); font-weight:800; font-size:16px;">${item.qty}</td>
                    <td style="color:var(--accent); font-weight:800; font-size:16px;">${item.free || 0}</td>
                    <td>
                        <button class="btn-icon edit" onclick="modifyMedicine('${item.id}')"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn-icon" onclick="deleteMedicine('${item.id}')"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            `;
        }

        // Render POS Dropdown (Applying Search Filter & Checking Stock)
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

    [...dbSales].reverse().forEach((sale, index) => {
        tRev += sale.total; tIgst += sale.igst; 
        let payStatusHtml = sale.payMode === "Pending" ? `<span style="color:var(--danger); font-weight:700;">Pending</span>` : `<span style="color:var(--accent); font-weight:700;">Paid</span>`;
        let originalIndex = dbSales.length - 1 - index;

        rBody.innerHTML += `
            <tr>
                <td><strong>${sale.invNo}</strong></td>
                <td>${sale.date}</td>
                <td>${sale.customer}</td>
                <td>₹${formatAmt(sale.taxable)}</td>
                <td>₹${formatAmt(sale.igst)}</td>
                <td style="color:var(--secondary); font-weight:800;">₹${formatAmt(sale.total)}</td>
                <td>${payStatusHtml}</td>
                <td class="text-muted">
                    ${sale.dueDate !== "N/A" ? sale.dueDate : '-'}
                    <button class="btn-icon edit" style="width: 25px; height: 25px; margin-left: 10px;" onclick="updatePaymentStatus(${originalIndex})"><i class="fa-solid fa-pen" style="font-size:10px;"></i></button>
                </td>
                <td>
                    <button class="btn-icon" title="Delete Bill & Revert Stock" onclick="deleteTransaction(${originalIndex})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    });

    let repRev = document.getElementById("repRev");
    if(repRev) repRev.innerText = formatMoney(tRev);
    
    let manualIgst = localStorage.getItem("shreya_igst_final_v20");
    let repIgstTotal = document.getElementById("repIgstTotal");
    if(repIgstTotal) {
        if(manualIgst !== null) repIgstTotal.innerText = formatMoney(parseFloat(manualIgst)) + " (M)";
        else repIgstTotal.innerText = formatMoney(tIgst);
    }
}

function editIgstTotal() {
    let currentManual = localStorage.getItem("shreya_igst_final_v20");
    let input = prompt("Enter manual IGST collected amount (Leave blank to auto-calculate):", currentManual || "");
    if(input !== null) {
        if(input.trim() === "") {
            localStorage.removeItem("shreya_igst_final_v20"); showToast("IGST set to Auto!");
        } else {
            localStorage.setItem("shreya_igst_final_v20", parseFloat(input)); showToast("IGST Updated!");
        }
        renderReports();
    }
}

function updatePaymentStatus(index) {
    let sale = dbSales[index];
    let newMode = prompt(`Update Payment Status for ${sale.invNo} (Type 'Paid' or 'Pending'):`, sale.payMode === 'Pending' ? 'Pending' : 'Paid');
    if (newMode) {
        if (newMode.toLowerCase() === 'pending') {
            let newDate = prompt(`Enter Due Date for ${sale.invNo} (YYYY-MM-DD):`, sale.dueDate !== 'N/A' ? sale.dueDate : '');
            sale.payMode = 'Pending'; sale.dueDate = newDate || 'N/A';
        } else if (newMode.toLowerCase() === 'paid') {
            sale.payMode = 'Cash/Online'; sale.dueDate = 'N/A';
        } else { return alert("Invalid Input!"); }
        localStorage.setItem("shreya_db_sales_v20", JSON.stringify(dbSales));
        renderReports(); showToast("Payment Status Updated!");
    }
}