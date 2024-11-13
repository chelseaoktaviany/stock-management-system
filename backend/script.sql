CREATE DATABASE stock_mgmnt_db;

USE stock_mgmnt_db;

CREATE TABLE items (
    item_code VARCHAR(255) NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    uom VARCHAR(255) NOT NULL
);

INSERT INTO items (item_code, name, uom) 
VALUES 
('010101001', 'Cable Tie', 'METER'), 
('010102001', 'Bolt', 'EACH'), 
('010103001', 'Pin', 'PCS');

CREATE TABLE batchitems (
    batch_id VARCHAR(255) NOT NULL PRIMARY KEY, 
    item_code VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES items(item_code), 
    expiry_date DATE
);

INSERT INTO batchitems
(batch_id, item_code, expiry_date)
VALUES
('010101001001', '010101001', '2025/01/01'),
('010101001002', '010101001', '2025/03/01'),
('010102001001', '010102001', '2025/02/10'),
('010102001002', '010102001', '2025/04/15'),
('010102001003', '010102001', '2025/05/10'),
('010103001001', '010103001', '2025/04/15');

CREATE TABLE stockentries (
   entry_id VARCHAR(255) NOT NULL PRIMARY KEY,
   tanggal DATE,
   type ENUM('IN', 'OUT') NOT NULL,
);

INSERT INTO stockentries (entry_id, tanggal, type)
VALUES
('SE001', '2024/11/05', 'IN'),
('SE002', '2024/11/10', 'OUT');

CREATE TABLE stockentrydetails (
    entry_detail_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    entry_id VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES stockentries(entry_id),
    item_code VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES items(item_code),
    batch_id VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES batchitems(batch_id),
    expiry_date DATE,
    qty INTEGER,
)

INSERT INTO stockentrydetails (entry_id, item_code, batch_id, expiry_date, qty) 
VALUES 
('SE001', '010101001', '010101001001', '2025/01/01', 30),
('SE001', '010101001', '010101001002', '2025/03/01', 60),
('SE001', '010102001', '010102001001', '2025/02/10', 40),
('SE001', '010102001', '010102001002', '2025/04/15', 30),
('SE001', '010102001', '010102001003', '2025/05/10', 40),
('SE001', '010103001', '010103001001', '2025/04/15', 70),
('SE002', '010101001', '010101001001', '2025/01/01', 10),
('SE002', '010102001', '010102001001', '10/02/2025', 15);

CREATE TABLE stockledgers (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    item_code VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES items(item_code),
    batch_id VARCHAR(255) NOT NULL FOREIGN KEY REFERENCES batchitems(batch_id),
    tanggal DATE,
    last_stock INTEGER DEFAULT 0,
    qty_in INTEGER DEFAULT 0,
    qty_out INTEGER DEFAULT 0,
)

INSERT INTO stockledgers (item_code, batch_id, tanggal, last_stock, qty_in, qty_out) 
VALUES 
('010101001', '010101001001', '2024/11/05', 0, 30, 0),
('010101001', '010101001002', '2024/11/05', 0, 60, 0),
('010102001', '010102001001', '2024/11/05', 0, 40, 0),
('010102001', '010102001002', '2024/11/05', 0, 30, 0),
('010102001', '010102001003', '2024/11/05', 0, 40, 0),
('010103001', '010103001001', '2024/11/05', 0, 70, 0),
('010101001', '010101001001', '2024/11/10', 30, 0, 10),
('010102001', '010102001001', '2024/11/10', 40, 0, 15);