# Anshika | Data Science & SQL Portfolio Dossier

**Target Roles:** Junior Data Analyst | SQL & Database Developer | Business Intelligence Associate | Data Science Intern/Associate  
**Contact:** anshika.datascience@gmail.com | [LinkedIn Profile](https://linkedin.com) | [GitHub Profile](https://github.com)

---

## 1. Professional Summary (Resume & LinkedIn Ready)

> "Enthusiastic Bachelor of Computer Applications (BCA) graduate with a deep passion for Data Science, relational database architecture, and Structured Query Language (SQL). Adept at complex data manipulation, database normalization (1NF–BCNF), and translating raw datasets into actionable commercial insights. Strong foundation in Python (Pandas, NumPy, Seaborn), PostgreSQL, MySQL, and Power BI. Eager to kickstart a career in a collaborative, tech-driven organization where I can continuously learn, solve analytical problems, and deliver measurable business value."

### Elevator Pitch / Headline Options:
* **Option A (Balanced):** BCA Graduate | Data Analyst & SQL Specialist | Python • Database Normalization • Business Intelligence
* **Option B (SQL/Data Focus):** Aspiring Data Analyst | Strong SQL (Window Functions, CTEs, 3NF/BCNF) & Python Data Manipulation
* **Option C (Business Impact):** Data Analyst | Turning Complex Data into Actionable Insights | SQL, Python, Power BI

---

## 2. Technical Skill Inventory

| Category | Skills & Tools |
| :--- | :--- |
| **Databases & Querying** | PostgreSQL, MySQL, SQLite, Relational Modeling, 1NF to BCNF Normalization, Window Functions (`ROW_NUMBER`, `DENSE_RANK`, `NTILE`, `LEAD`/`LAG`), Common Table Expressions (CTEs), Subqueries, Indexing, Foreign Key Integrity |
| **Data Manipulation & Science**| Python (`pandas`, `numpy`), Exploratory Data Analysis (EDA), Missing Value Imputation, Outlier Detection, Statistical Summaries, Basic Scikit-Learn |
| **Data Visualization & BI** | Power BI, Matplotlib, Seaborn, Interactive Dashboards, Advanced Excel (Pivot Tables, VLOOKUP/XLOOKUP) |
| **Computer Science & Tools** | BCA Core Curriculum (Data Structures, DBMS, OOP), Git & GitHub, Jupyter Notebooks, VS Code, dbdiagram.io |

---

## 3. Flagship Portfolio Projects

### Project 1: E-Commerce RFM Segmentation & Customer Retention Analytics
* **Objective:** Design an anomaly-free relational database from scratch and identify high-value vs. churn-risk customers for an e-commerce platform.
* **Tech Stack:** PostgreSQL, SQL Window Functions, Python (Matplotlib), Relational Normalization.
* **Key Achievements:**
  * Normalized unorganized customer transaction logs into 4 discrete 3NF tables (`customers`, `orders`, `order_items`, `products`), eliminating multi-valued and transitive dependencies.
  * Authored optimized SQL scripts leveraging `NTILE(4) OVER (...)` across Recency, Frequency, and Monetary parameters to bucket customers into 4 distinct segments (Champions, At-Risk, Hibernating, Promising).
  * Uncovered that the top 14% of customers generated 58% of gross revenues, supplying marketing teams with automated SQL views to trigger targeted retention discounts.

### Project 2: Healthcare Patient Readmission & Clinical Capacity Model
* **Objective:** Restructure hospital operation records to analyze readmission rates within 30 days and monitor department-level bed occupancy.
* **Tech Stack:** MySQL, Common Table Expressions (CTEs), Stored Procedures, Power BI.
* **Key Achievements:**
  * Designed an ER diagram and normalized hospital management data into 3NF, establishing referential constraints across Admissions, Physicians, and Ward allocations.
  * Formulated multi-level CTEs calculating 30-day readmission intervals using `DATEDIFF()` and `LAG()` functions.
  * Pinpointed an 18% readmission surge within specific post-surgery wards caused by follow-up scheduling gaps, highlighting opportunities for bed turn-around optimization.

### Project 3: Superstore Retail Profitability & Discount Strategy Analysis
* **Objective:** Perform in-depth Exploratory Data Analysis (EDA) on 50,000+ retail sales records to resolve profit margin leakages.
* **Tech Stack:** Python (`pandas`, `seaborn`, `numpy`), Power BI, Jupyter Notebook.
* **Key Achievements:**
  * Cleaned and transformed high-dimensional retail datasets: handled missing values, converted datetime attributes, and engineered profit ratio metrics.
  * Conducted correlation analysis revealing that discounts surpassing 20% in specific furniture categories led to negative net margins despite high sales volume.
  * Developed an interactive Power BI dashboard featuring dynamic KPI cards, category filters, and regional profit heatmaps for management review.

---

## 4. Key SQL Interview Scenarios to Discuss

1. **Database Normalization (1NF $\to$ 2NF $\to$ 3NF $\to$ BCNF):**
   * *1NF:* Atomic values per cell, unique primary key, no repeating groups.
   * *2NF:* 1NF + all non-key attributes fully functionally dependent on the entire primary key (no partial dependencies on composite keys).
   * *3NF:* 2NF + no transitive dependencies (non-key columns cannot depend on other non-key columns).
   * *BCNF:* Every determinant must be a candidate key.

2. **Window Functions vs. GROUP BY:**
   * Explain how `GROUP BY` collapses individual rows into summary rows, whereas `OVER (PARTITION BY ...)` preserves the underlying row-level granularity while computing aggregated or ranked values alongside them.

3. **Performance Optimization:**
   * Selective B-tree Indexing on foreign keys and frequently filtered `WHERE`/`JOIN` columns.
   * Avoiding `SELECT *` in production queries to reduce network payload and memory buffer churn.
   * Using `EXPLAIN ANALYZE` to inspect sequential table scans vs. index scans.

---

## 5. Recommended Next Steps for Anshika
1. **Host the Website:** Push the portfolio files (`index.html`, `styles.css`, `script.js`) to a GitHub repository named `anshika.github.io` or deploy via GitHub Pages.
2. **Add GitHub Repos:** Upload the SQL scripts and Jupyter Notebooks for the three projects with clear README files.
3. **LinkedIn Outreach:** Update the headline and "About" section with the text in Section 1, and pin the live portfolio link in the "Featured" section.
