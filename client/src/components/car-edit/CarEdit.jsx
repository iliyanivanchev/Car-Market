import styles from "./CarEdit.module.css";

export default function CarEdit() {
    return (
        <section id="edit-listing">
            <div className={styles["container"]}>

                <form id="edit-form">
                    <h1>Edit Car</h1>
                    <p>Please fill in this form to edit a car listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Brand" name="brand" value="" />

                    <p>Car Model</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Model" name="model" value="" />

                    <p>Description</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Description" name="description" value="" />

                    <p>Car Year</p>
                    <input type="number" className={styles["input"]} placeholder="Enter Car Year" name="year" value="" />

                    <p>Car Image</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Image" name="imageUrl" value="" />

                    <p>Car Price</p>
                    <input type="number" className={styles["input"]} placeholder="Enter Car Price" name="price" value="" />

                    <hr />
                    <input type="submit" className={styles["editbtn"]} value="Edit Listing" />
                </form>
            </div>
        </section>
    );
}