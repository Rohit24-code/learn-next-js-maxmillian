import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';

const db = sql('meals.db');



export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    // throw new Error('Something went wrong');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMealById(id) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);


    const extension = meal.image.name.split('.').pop();
    const filename = meal.slug + "." + extension;
    const path = "public/images/" + filename;
    const file = fs.createWriteStream(path);
    const bufferedImage = await meal.image.arrayBuffer();
    file.write(Buffer.from(bufferedImage));
    file.end();
    meal.image = "/images/" + filename;


    const insert = db.prepare('INSERT INTO meals (slug, title, summary, instructions, creator, creator_email, image) VALUES (?, ?, ?, ?, ?, ?, ?)');
    insert.run(meal.slug,
        meal.title,
        meal.summary,
        meal.instructions,
        meal.creator,
        meal.creatorEmail,
        meal.image);
}