module.exports = [
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/meals.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMealById",
    ()=>getMealById,
    "getMeals",
    ()=>getMeals,
    "saveMeal",
    ()=>saveMeal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slugify/slugify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xss/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
;
;
;
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"])('meals.db');
async function getMeals() {
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    // throw new Error('Something went wrong');
    return db.prepare('SELECT * FROM meals').all();
}
function getMealById(id) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}
async function saveMeal(meal) {
    meal.slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(meal.title, {
        lower: true
    });
    meal.instructions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xss$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const filename = meal.slug + "." + extension;
    const path = "public/images/" + filename;
    const file = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createWriteStream(path);
    const bufferedImage = await meal.image.arrayBuffer();
    file.write(Buffer.from(bufferedImage));
    file.end();
    meal.image = "/images/" + filename;
    const insert = db.prepare('INSERT INTO meals (slug, title, summary, instructions, creator, creator_email, image) VALUES (?, ?, ?, ?, ?, ?, ?)');
    insert.run(meal.slug, meal.title, meal.summary, meal.instructions, meal.creator, meal.creatorEmail, meal.image);
}
}),
"[project]/lib/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"607a708f598a5dd1ec60aeb735de54ac4fc038044e":"shareMeal"},"",""] */ __turbopack_context__.s([
    "shareMeal",
    ()=>shareMeal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/meals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
function isInvalidText(text) {
    return text.trim === "" || !text;
}
async function shareMeal(prevData, formData) {
    // this i have used bcs we are using 'use client' in the form, this created a server action only execute on the server not on the client
    // 'use server'
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        creatorEmail: formData.get('email'),
        image: formData.get('image')
    };
    if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || isInvalidText(meal.creator) || isInvalidText(meal.creatorEmail) || !meal.image || meal.image.size === 0) {
        return {
            error: 'All fields are required'
        };
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$meals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveMeal"])(meal);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/meals");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    shareMeal
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(shareMeal, "607a708f598a5dd1ec60aeb735de54ac4fc038044e", null);
}),
"[project]/.next-internal/server/app/meals/share/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.js [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/meals/share/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "607a708f598a5dd1ec60aeb735de54ac4fc038044e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shareMeal"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$meals$2f$share$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/meals/share/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__491bca5a._.js.map