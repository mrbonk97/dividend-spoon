CREATE TABLE stock_info (
    Symbol         VARCHAR2(20),
    Name           VARCHAR2(255),
    Last_Sale      NUMBER(10, 2),
    Net_Change     NUMBER(10, 2),
    Percent_Change VARCHAR2(10),
    Market_Cap     NUMBER(20, 2),
    Country        VARCHAR2(100),
    IPO_Year       NUMBER(4),
    Volume         NUMBER(20),
    Sector         VARCHAR2(100),
    Industry       VARCHAR2(255)
);

CREATE TABLE etf_info (
    Symbol          VARCHAR2(20),
    Name            VARCHAR2(255),
    Last_Price      NUMBER(10, 4),
    Net_Change      NUMBER(10, 4),
    Percent_Change  NUMBER(20, 17),
    Delta           VARCHAR2(10),
    OneYr_Change    VARCHAR2(10)
);