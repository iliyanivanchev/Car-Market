import styles from "./CarCreate.module.css";

export default function CarCreate() {
    return (
        <section id="create-listing">
            <div className={styles["container"]}>
                <form id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr className={styles["hr"]}/>

                    <p>Car Brand</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Brand" name="brand" />

                    <p>Car Model</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Model" name="model" />

                    <p>Description</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Description" name="description" />

                    <p>Car Year</p>
                    <input type="number" className={styles["input"]} placeholder="Enter Car Year" name="year" />

                    <p>Car Image</p>
                    <input type="text" className={styles["input"]} placeholder="Enter Car Image" name="imageUrl" />

                    <p>Car Price</p>
                    <input type="number" className={styles["input"]} placeholder="Enter Car Price" name="price" />

                    <hr />
                    <input type="submit" className={styles["createbtn"]} value="Create Car Listing" />
                </form>
            </div>
        </section>
    );
}