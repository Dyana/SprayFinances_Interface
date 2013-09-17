<!DOCTYPE html>
<html>
    <head>
        <title>Spray Finances</title>
        <link rel="stylesheet" href="web/style.css" />
        <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Quattrocento' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
    </head>

    <body>
        <div id="container">
            <div id="wrap">
                <div id="header-content" class="soft-padding-all">
                    <h1>Spray Finances</h1>
                </div>
                <div id="form-area">
                    <form action="somescript.php" method="post">
                        <div id="transaction-types">
                            <label class="soft-margin-right">Income:</label>
                            <input class="extra-hard-margin-right" type="radio" name="transaction-type" value="Income"/>
                            <label class="soft-margin-right">Expense:</label>
                            <input type="radio" name="transaction-type" value="Expense" />
                            <p><input name="amount" placeholder="Amount" type="number" /></p>
                        </div>
                        <div id="description-notes">
                            <label>Description:</label>
                            <p><textarea rows="6" cols="35" name="description" placeholder="Describe transaction."/></textarea></p>
                        </div>
                        <div id="calander-info">
                            <label>Date:</label>
                            <p><input  name="date" type="date" placeholder="Remember when?" /></p>
                            <p><input type="submit" name="submit" id="submit"></p>
                        </div>
                    </form>
                </div>
                <div id="dashboard">
                    <div class="stat-area">
                        <div class="stat-box">
                            <div>Income</div>
                            <p class="income-stat">$999,999.00</p>
                        </div>
                        <div class="stat-box">
                            <div>Expense</div>
                            <p class="expense-stat">$999,999.00</p>
                        </div>
                        <div class="stat-box">
                            <div>Balance</div>
                            <p class="balance-stat">$999,999.00</p>
                        </div>
                    </div>
                    <div id="transactions">
                        <h2>Recent Transactions</h2>
                        <div class="transaction-record">
                            <div class="transaction-date">mm/dd/yyyy</div>
                            <div class="transaction-amount">Income: $2000.00</div>
                            <div class="transaction-description">Description: Little Pond Farms</div>
                        </div>
                        <div class="transaction-record">
                            <div class="transaction-date">mm/dd/yyyy</div>
                            <div class="transaction-amount">Expense: $100.00</div>
                            <div class="transaction-description">Description: Water Bill</div>
                        </div>
                        <div class="transaction-record">
                            <div class="transaction-date">mm/dd/yyyy</div>
                            <div class="transaction-amount">Expense: $50.00</div>
                            <div class="transaction-description">Description: Red Lobster. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                        </div>
                        <div class="transaction-record">
                            <div class="transaction-date">mm/dd/yyyy</div>
                            <div class="transaction-amount">Expense: $10.00</div>
                            <div class="transaction-description">Description: Rite Aid</div>
                        </div>
                        <div class="transaction-record">
                            <div class="transaction-date">mm/dd/yyyy</div>
                            <div class="transaction-amount">Expense: $30.00</div>
                            <div class="transaction-description">Description: Gas, Timmy's Quick Stop.</div>
                        </div>
                    </div>
                </div>
                <div class="push"></div>
            </div>
            <div class="footer" style="text-align:center">
                <div class="footer-notes">Created and designed by Charles Sprayberry & Dyana Sprayberry.</div>
            </div>
        </div>
    </body>
</html>
