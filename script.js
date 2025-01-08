const quizData = [
    {
    question: "What does 'pip' stand for in Forex trading?",
    options: ["Percentage in Point", "Price Interest Point", "Primary Interest Point", "Profit in Pips"],
    correctAnswer: 0,
  },
  {
    question: "What is leverage in Forex?",
    options: ["A fixed amount of profit", "A tool to increase trading volume with borrowed funds", "A fee charged by brokers", "An indicator for trading strategies"],
    correctAnswer: 1,
  },
  {
    question: "What is a margin call in Forex?",
    options: ["A request to add more funds to the account", "A type of order", "A strategy for risk management", "A fee imposed on trades"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an example of a major Forex currency pair?",
    options: ["GBP/USD", "AUD/JPY", "USD/TRY", "EUR/GBP"],
    correctAnswer: 0,
  },
  {
    question: "What is the impact of interest rates on Forex?",
    options: ["It determines the strength of a currency", "It has no effect on Forex markets", "It affects the spread", "It only affects commodities"],
    correctAnswer: 0,
  },
{
    question: "What is a stop-loss order used for in Forex trading?",
    options: ["To close a trade automatically at a specific profit", "To prevent further losses in a trade", "To calculate the spread", "To maximize leverage"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is NOT a Forex trading session?",
    options: ["Tokyo", "London", "Sydney", "Berlin"],
    correctAnswer: 3,
  },
  {
    question: "What is a 'spread' in Forex?",
    options: ["The difference between the bid and ask price", "The total amount of profit", "A type of chart pattern", "A trading strategy"],
    correctAnswer: 0,
  },
  {
    question: "What is the base currency in the pair USD/JPY?",
    options: ["USD", "JPY", "Both", "Neither"],
    correctAnswer: 0,
  },
  {
    question: "What is the quote currency in the pair EUR/USD?",
    options: ["EUR", "USD", "Both", "Neither"],
    correctAnswer: 1,
  },
  {
    question: "What does a candlestick represent on a Forex chart?",
    options: ["Open, high, low, close prices", "Spread and leverage", "Market volatility", "Trader sentiment"],
    correctAnswer: 0,
  },
  {
    question: "Which tool is used for identifying overbought or oversold conditions?",
    options: ["RSI", "Bollinger Bands", "MACD", "Moving Averages"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary function of a trading journal?",
    options: [
      "To record and evaluate trading performance",
      "To calculate spreads",
      "To track broker fees",
      "To predict market movements",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does a bullish candlestick signify?",
    options: [
      "The price closed higher than it opened",
      "The price closed lower than it opened",
      "The market is overbought",
      "The market is in consolidation",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does a bearish candlestick signify?",
    options: [
      "The price closed lower than it opened",
      "The price closed higher than it opened",
      "The market is oversold",
      "The market is volatile",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a 'limit order' in Forex?",
    options: [
      "An order to buy or sell at a specific price",
      "An order executed immediately at the current price",
      "An order to prevent further losses",
      "An order based on news events",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a 'market order' in Forex?",
    options: [
      "An order executed immediately at the current market price",
      "An order to buy or sell at a specific price",
      "An order based on leverage",
      "An order used for fundamental analysis",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which chart pattern indicates a trend reversal?",
    options: [
      "Double top",
      "Ascending triangle",
      "Continuation pattern",
      "Breakout",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is slippage in Forex trading?",
    options: [
      "The difference between the expected price and the executed price",
      "The spread between currency pairs",
      "The maximum leverage allowed",
      "The broker’s commission fee",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is 'scalping' in Forex?",
    options: [
      "A strategy that involves making quick trades for small profits",
      "A long-term trading strategy",
      "A risk management technique",
      "An analysis tool",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does 'hedging' mean in Forex?",
    options: [
      "Reducing risk by opening opposite trades",
      "Using leverage to increase profits",
      "Trading during all sessions",
      "Maximizing market volatility",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which indicator is best for identifying market trends?",
    options: ["Moving Averages", "RSI", "Stochastic", "Fibonacci Retracement"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a take-profit order?",
    options: [
      "To close a trade automatically at a specific profit level",
      "To minimize losses",
      "To analyze charts",
      "To track volatility",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does the term 'volatility' refer to in Forex?",
    options: [
      "The degree of price movement in the market",
      "The spread between currencies",
      "The interest rate difference",
      "The broker's fees",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of risk management?",
    options: [
      "To protect your account from large losses",
      "To maximize leverage",
      "To trade during volatile sessions",
      "To increase profits quickly",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which timeframe is best for scalping?",
    options: ["1 minute", "1 hour", "4 hours", "1 day"],
    correctAnswer: 0,
  },
  {
    question: "What does 'drawdown' mean in trading?",
    options: [
      "The decline in account balance from its peak",
      "The spread between bid and ask prices",
      "The leverage ratio",
      "The maximum lot size",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which economic indicator often affects Forex prices?",
    options: ["Non-farm payrolls (NFP)", "Candlestick patterns", "RSI", "Stochastic"],
    correctAnswer: 0,
  },
  {
    question: "Which currency is considered a safe haven?",
    options: ["USD", "JPY", "GBP", "AUD"],
    correctAnswer: 1,
  },
  {
    question: "What is a Forex 'lot'?",
    options: [
      "The standardized size of a trading position",
      "The interest rate difference",
      "The spread value",
      "The price of a currency pair",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which strategy involves holding trades for several weeks?",
    options: ["Swing trading", "Scalping", "Day trading", "Position trading"],
    correctAnswer: 3,
  },
  {
    question: "What does the term 'liquidity' mean in Forex?",
    options: [
      "The ease of buying or selling assets in the market",
      "The volatility of a currency pair",
      "The leverage ratio used",
      "The broker's trading fees",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is a 'currency pair' in Forex?",
    options: ["Two currencies traded together", "A single currency", "A type of trading strategy", "A type of order"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a trailing stop?",
    options: ["To lock in profits while allowing for more potential gains", "To set a fixed stop-loss", "To automatically close a trade at a fixed profit", "To calculate leverage"],
    correctAnswer: 0,
  },
  {
    question: "What does 'long position' mean in Forex?",
    options: ["Buying a currency pair", "Selling a currency pair", "Holding a trade for a long period", "A strategy used by scalpers"],
    correctAnswer: 0,
  },
  {
    question: "What does 'short position' mean in Forex?",
    options: ["Selling a currency pair", "Buying a currency pair", "Holding a trade for a short period", "A strategy used by position traders"],
    correctAnswer: 0,
  },
  {
    question: "What is a pipette?",
    options: ["A fractional part of a pip", "The full value of a pip", "A type of stop order", "An indicator for market volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of a Forex broker?",
    options: ["To provide a platform for trading", "To predict the market movements", "To manage the trader's risk", "To execute trades only during specific hours"],
    correctAnswer: 0,
  },
  {
    question: "What does 'fundamental analysis' in Forex involve?",
    options: ["Analyzing economic data and news to predict price movements", "Using charts and indicators to predict price movements", "Determining market sentiment", "Tracking historical price patterns"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a currency pair with the USD as the quote currency?",
    options: ["EUR/USD", "USD/CHF", "GBP/USD", "USD/JPY"],
    correctAnswer: 1,
  },
  {
    question: "What is a 'pip value' in Forex?",
    options: ["The monetary value of a single pip movement", "The amount of leverage applied", "The interest rate difference", "The difference between the bid and ask price"],
    correctAnswer: 0,
  },
  {
    question: "What is the meaning of 'overbought' in Forex?",
    options: ["A situation where a currency has risen too quickly", "A situation where a currency has fallen too quickly", "A strategy for risk management", "A type of candlestick pattern"],
    correctAnswer: 0,
  },
  {
    question: "What is the meaning of 'oversold' in Forex?",
    options: ["A situation where a currency has fallen too quickly", "A situation where a currency has risen too quickly", "A strategy for increasing leverage", "A technical analysis tool"],
    correctAnswer: 0,
  },
  {
    question: "What does the term 'spread' mean in Forex trading?",
    options: ["The difference between the buy and sell price", "The interest rate difference between two currencies", "The total profit from a trade", "The total number of trades made"],
    correctAnswer: 0,
  },
  {
    question: "Which type of analysis uses charts and historical data to predict future price movements?",
    options: ["Technical analysis", "Fundamental analysis", "Sentiment analysis", "Market prediction analysis"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of a 'moving average' in technical analysis?",
    options: ["To smooth out price data and identify trends", "To predict future interest rates", "To analyze economic reports", "To track global market news"],
    correctAnswer: 0,
  },
  {
    question: "What does 'momentum' refer to in Forex?",
    options: ["The speed of price movement", "The total number of trades made", "The average spread over a period", "The number of pips gained per trade"],
    correctAnswer: 0,
  },
  {
    question: "What does 'liquidity' refer to in the Forex market?",
    options: ["The ease of buying or selling a currency without affecting its price", "The spread between two currencies", "The amount of leverage available", "The total trading volume in the market"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an example of a Forex major currency?",
    options: ["USD", "BTC", "XAU", "ETH"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'cross currency pair'?",
    options: ["A currency pair that does not involve the USD", "A currency pair that only involves exotic currencies", "A currency pair that is traded outside market hours", "A type of chart pattern"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'Stochastic Oscillator' help traders identify?",
    options: ["Overbought and oversold conditions", "The overall trend direction", "The spread between currencies", "Support and resistance levels"],
    correctAnswer: 0,
  },
  {
    question: "What is 'news trading' in Forex?",
    options: ["Trading based on economic news releases", "Trading based on chart patterns", "Trading based on market sentiment", "Trading based on the RSI indicator"],
    correctAnswer: 0,
  },
  {
    question: "What does 'carry trade' mean in Forex?",
    options: ["Borrowing money in a low-interest-rate currency to invest in a high-interest-rate currency", "Using leverage to amplify trade size", "Trading multiple currency pairs simultaneously", "Holding positions for the long term"],
    correctAnswer: 0,
  },
  {
    question: "What is the impact of economic indicators on Forex?",
    options: ["They influence the price direction of currencies", "They have no effect on currency prices", "They determine the leverage ratio", "They change the spread between pairs"],
    correctAnswer: 0,
  },
  {
    question: "What is the main function of a broker’s spread?",
    options: ["To make money from traders", "To increase leverage", "To stabilize the market", "To calculate risk management strategies"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'retracement' in Forex?",
    options: ["A temporary reversal in the price direction before the main trend resumes", "A permanent change in market direction", "A type of candlestick pattern", "A type of order used to lock profits"],
    correctAnswer: 0,
  },
  {
    question: "What is the significance of the 50-period moving average in technical analysis?",
    options: ["It is commonly used to identify the medium-term trend", "It is the most volatile moving average", "It tracks the highest point in the market", "It is used only for major currency pairs"],
    correctAnswer: 0,
  },
  {
    question: "What does 'spread betting' mean in Forex?",
    options: ["Placing bets on whether the market will go up or down", "Betting on the direction of interest rates", "Trading on the difference between bid and ask price", "Trading a combination of major and minor pairs"],
    correctAnswer: 0,
  },
  {
    question: "What does 'position trading' involve?",
    options: ["Holding a position for a long period of time, often weeks or months", "Making quick trades to catch short-term price moves", "Day trading with a small lot size", "Hedging against potential market losses"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'chart pattern' in Forex?",
    options: ["A graphical representation of price movements that traders use to predict future price behavior", "A strategy for managing risk", "An indicator to measure volatility", "A trading strategy for using leverage"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bear market'?",
    options: ["A market characterized by falling prices", "A market characterized by rising prices", "A market where prices are stable", "A market with high volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bull market'?",
    options: ["A market characterized by rising prices", "A market characterized by falling prices", "A market with low volatility", "A market where all currencies are traded in the same direction"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'breakout' in Forex?",
    options: ["A sharp price movement beyond a key support or resistance level", "A minor price correction", "A market consolidation phase", "A type of trading session"],
    correctAnswer: 0,
  },
  {
    question: "Which tool can be used to measure market volatility?",
    options: ["Bollinger Bands", "Moving Averages", "RSI", "MACD"],
    correctAnswer: 0,
  },
  {
    question: "What does 'mean reversion' imply in Forex trading?",
    options: ["The theory that prices tend to return to a mean or average level over time", "Prices will always move in the direction of the trend", "A strategy that uses volatility to predict future price movements", "A market condition where prices rise rapidly without reversal"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary risk in Forex trading?",
    options: ["The potential for significant losses due to leverage", "The spread between currencies", "Interest rate changes", "Broker fees"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'take-profit order' used for?",
    options: ["To automatically close a trade when a specific profit target is reached", "To stop losses", "To set the spread for a trade", "To reduce the lot size of a trade"],
    correctAnswer: 0,
  },
  {
    question: "What does 'price action' mean in Forex?",
    options: ["The movement of price on a chart", "The spread between bid and ask prices", "The analysis of economic reports", "The use of multiple indicators"],
    correctAnswer: 0,
  },
  {
    question: "What is the most common method used for managing risk in Forex?",
    options: ["Using stop-loss and take-profit orders", "Overleveraging", "Using news events for trades", "Trading during volatile periods"],
    correctAnswer: 0,
  },
  {
    question: "What does 'exotic currency' mean?",
    options: ["A currency from a developing or less-traded economy", "A highly liquid currency", "A type of Forex order", "A currency pair with high volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Eurozone'?",
    options: ["A region in Europe using the Euro as currency", "A type of currency pair", "A trading strategy", "A Forex trading platform"],
    correctAnswer: 0,
  },
  {
    question: "What is 'Forex arbitrage'?",
    options: ["The practice of exploiting price differences between markets or brokers", "A method of predicting market trends", "A risk management strategy", "A type of trading session"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'US Dollar Index' (DXY)?",
    options: ["An index measuring the value of the US Dollar against a basket of major currencies", "An indicator for chart patterns", "A tool to calculate market liquidity", "A trading strategy for USD pairs"],
    correctAnswer: 0,
  },
  {
    question: "What does 'divergence' mean in Forex?",
    options: ["When the price moves in the opposite direction to an indicator", "When prices are moving in the same direction", "When a currency pair breaks key support levels", "When a market consolidates"],
    correctAnswer: 0,
  },
  {
    question: "What does 'trading psychology' refer to?",
    options: ["The mental and emotional factors affecting trading decisions", "The calculation of risk-to-reward ratios", "The use of charts to predict price movements", "The technical aspects of trading platforms"],
    correctAnswer: 0,
 },
{
    question: "What is a Forex broker?",
    options: ["A person who trades on behalf of the client", "A platform for executing trades", "A marketplace for currency pairs", "A currency exchange bank"],
    correctAnswer: 0,
  },
  {
    question: "What is a Forex 'swap'?",
    options: ["The interest paid or earned for holding a position overnight", "The difference between the bid and ask price", "A type of trading strategy", "A risk management tool"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an example of a commodity currency pair?",
    options: ["AUD/USD", "GBP/USD", "EUR/USD", "JPY/USD"],
    correctAnswer: 0,
  },
  {
    question: "What is the best method for analyzing Forex markets?",
    options: ["Using a combination of technical and fundamental analysis", "Only relying on technical indicators", "Watching social media for market trends", "Following brokers' trade recommendations"],
    correctAnswer: 0,
  },
  {
    question: "What does the term 'slippage' refer to in Forex trading?",
    options: ["The difference between the expected price and the executed price", "The difference between the bid and ask price", "The maximum leverage allowed", "The broker’s commission fee"],
    correctAnswer: 0,
  },
  {
    question: "What is the most common order type used in Forex?",
    options: ["Market order", "Stop loss order", "Limit order", "Take profit order"],
    correctAnswer: 0,
  },
  {
    question: "What does 'overbought' mean in the context of Forex?",
    options: ["The market is trending upward and may reverse", "The market is trending downward", "The market is at equilibrium", "The market is highly volatile"],
    correctAnswer: 0,
  },
  {
    question: "Which type of chart is commonly used by Forex traders?",
    options: ["Candlestick chart", "Line chart", "Bar chart", "Tick chart"],
    correctAnswer: 0,
  },
  {
    question: "What is the RSI (Relative Strength Index) used to measure?",
    options: ["The strength of a currency pair's price movement", "The price action of a currency pair", "The market sentiment", "The level of interest rates"],
    correctAnswer: 0,
  },
  {
    question: "What is a Fibonacci retracement used for in Forex trading?",
    options: ["To identify potential reversal levels in the market", "To calculate leverage", "To determine spread size", "To set stop-loss orders"],
    correctAnswer: 0,
  },
  {
    question: "Which trading session is known for the highest trading volume?",
    options: ["London session", "Tokyo session", "New York session", "Sydney session"],
    correctAnswer: 0,
  },
  {
    question: "What is a trading strategy that involves holding trades for several hours or days?",
    options: ["Swing trading", "Day trading", "Scalping", "Position trading"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an indicator used for trend reversal?",
    options: ["MACD", "RSI", "Bollinger Bands", "Fibonacci retracement"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a trailing stop in Forex?",
    options: ["To lock in profits as the market moves in your favor", "To set a limit on losses", "To calculate the spread", "To predict future price movements"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a tool for identifying support and resistance levels?",
    options: ["Fibonacci retracement", "RSI", "Stochastic oscillator", "Bollinger Bands"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following terms refers to the risk of losing money due to market fluctuations?",
    options: ["Market risk", "Credit risk", "Liquidity risk", "Operational risk"],
    correctAnswer: 0,
  },
  {
    question: "What is a trading plan in Forex?",
    options: ["A strategy that defines how to manage trades and risk", "A document that lists all market conditions", "A tool for predicting future prices", "A type of chart used for analysis"],
    correctAnswer: 0,
  },
  {
    question: "What does a moving average represent in Forex?",
    options: ["The average price over a specified period", "The highest price in a given range", "The spread between the bid and ask price", "The rate of change in price over time"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is true about margin trading?",
    options: ["It allows you to trade with borrowed funds", "It reduces the risk of losing money", "It guarantees profits", "It is a strategy for day trading only"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a fundamental analysis tool?",
    options: ["Interest rates", "RSI", "Moving averages", "Bollinger Bands"],
    correctAnswer: 0,
  },
  {
    question: "What does a breakout indicate in Forex trading?",
    options: ["A price movement that breaks through a key support or resistance level", "A market that is consolidating", "A reversal in the trend", "A sharp drop in volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is the risk-to-reward ratio in Forex trading?",
    options: ["The ratio of potential loss to potential gain", "The ratio of the bid and ask price", "The leverage ratio", "The percentage of profitable trades"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a common mistake in Forex trading?",
    options: ["Overleveraging", "Underusing stop-loss orders", "Ignoring risk management", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: "What does it mean when a currency pair is trending?",
    options: ["The currency pair's price is consistently moving in one direction", "The currency pair's price is fluctuating within a range", "The market is in a state of consolidation", "There is no significant movement in the market"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a factor that affects currency prices?",
    options: ["Interest rates", "Political stability", "Weather conditions", "Economic data releases"],
    correctAnswer: 2,
  },
  {
    question: "What is the primary objective of Forex risk management?",
    options: ["To prevent significant losses and protect capital", "To maximize leverage", "To increase the number of trades", "To predict the exact market direction"],
    correctAnswer: 0,
  },
  {
    question: "What is a Forex 'pivot point'?",
    options: ["A price level that indicates potential support or resistance", "A type of trend-following strategy", "A candlestick pattern", "A type of market order"],
    correctAnswer: 0,
  },
  {
    question: "Which type of order is used to buy or sell at the best available price in the market?",
    options: ["Market order", "Limit order", "Stop loss order", "Take profit order"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bear market' in Forex?",
    options: ["A market in which prices are falling", "A market in which prices are rising", "A market with high volatility", "A market with low liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What is 'liquidity risk' in Forex?",
    options: ["The risk of not being able to execute a trade due to insufficient market participants", "The risk of losing money on a single trade", "The risk of political instability affecting the market", "The risk of slippage during trade execution"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary goal of using technical analysis in Forex?",
    options: ["To predict future price movements based on past price action", "To determine the interest rates set by central banks", "To assess the fundamental strength of an economy", "To measure the volatility of a currency pair"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a 'stop-loss' order?",
    options: ["To automatically close a position when the market moves against the trader", "To calculate the take-profit level", "To track market volatility", "To increase leverage"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is true about Forex trading?",
    options: ["It involves buying one currency while simultaneously selling another", "It only involves buying currencies", "It only involves trading commodities", "It is restricted to specific countries"],
    correctAnswer: 0,
  },
  {
    question: "What is 'position sizing' in Forex trading?",
    options: ["Determining the amount of capital to risk per trade", "Determining the duration of a trade", "Calculating the spread between currency pairs", "The time it takes to place an order"],
    correctAnswer: 0,
  },
  {
    question: "What is a key feature of 'fundamental analysis' in Forex trading?",
    options: ["It involves studying economic indicators and news events", "It focuses solely on price charts", "It predicts short-term price movements", "It is based on historical price patterns"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a type of Forex order?",
    options: ["Market order", "Limit order", "Stop loss order", "Volatility order"],
    correctAnswer: 3,
  },
  {
    question: "What is the difference between a 'bull market' and a 'bear market'?",
    options: ["Bull market is rising prices, bear market is falling prices", "Bull market is characterized by low volatility", "Bear market is characterized by rising prices", "Bull market is when a single currency pair is traded"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an example of a cross-currency pair?",
    options: ["GBP/JPY", "USD/JPY", "AUD/USD", "EUR/USD"],
    correctAnswer: 0,
  },
  {
    question: "What does 'economic calendar' refer to in Forex?",
    options: ["A schedule of important economic events and data releases", "A tool for tracking market orders", "A list of candlestick patterns", "A tool for analyzing market trends"],
    correctAnswer: 0,
  },
  {
    question: "What does 'market sentiment' refer to in Forex?",
    options: ["The general attitude or emotion of traders towards a currency", "The price difference between bid and ask", "The number of trades executed in a market", "The time frame for a specific trade"],
    correctAnswer: 0,
  },
  {
    question: "What is a pip in Forex trading?",
    options: ["The smallest price movement a currency pair can make", "A type of trading order", "A market analysis tool", "A trading platform"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a key principle of risk management in Forex trading?",
    options: ["Risk should never exceed 2% of your trading capital per trade", "The more trades you place, the more profit you make", "Using high leverage reduces risk", "Risk is not important in Forex trading"],
    correctAnswer: 0,
  },
  {
    question: "What is the difference between a 'bullish' and 'bearish' trend?",
    options: ["Bullish: Upward trend, Bearish: Downward trend", "Bullish: Downward trend, Bearish: Upward trend", "Bullish: Sideways movement, Bearish: Trending", "Bullish: High volatility, Bearish: Low volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary function of a Forex broker?",
    options: ["To provide a platform for executing trades", "To advise on market conditions", "To set the market prices", "To guarantee profits"],
    correctAnswer: 0,
  },
  {
    question: "What is leverage in Forex trading?",
    options: ["The ability to control a large position with a small amount of capital", "The ability to trade with no risk", "The amount of interest paid on a trade", "The number of trades executed per day"],
    correctAnswer: 0,
  },
  {
    question: "What does a 'long position' mean in Forex?",
    options: ["Buying a currency pair in anticipation of its price rising", "Selling a currency pair in anticipation of its price falling", "Holding a position for a short time", "Holding a position during market news events"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'short position' in Forex trading?",
    options: ["Selling a currency pair in anticipation of its price falling", "Buying a currency pair in anticipation of its price rising", "A position held for the long term", "A position executed using high leverage"],
    correctAnswer: 0,
  },
  {
    question: "What does 'spread' mean in Forex?",
    options: ["The difference between the bid and ask price", "The number of traders in the market", "The volatility of a currency pair", "The trading volume at a given time"],
    correctAnswer: 0,
  },
  {
    question: "What is the function of a stop-loss order?",
    options: ["To limit a trader's potential loss", "To increase the trader's leverage", "To lock in profits", "To execute a trade automatically when a price target is reached"],
    correctAnswer: 0,
  },
  {
    question: "What does 'scalping' refer to in Forex trading?",
    options: ["Making multiple small trades to profit from small price changes", "Holding a trade for an extended period", "Trading based on economic data", "A strategy used during high volatility markets"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of economic data in Forex trading?",
    options: ["It helps traders make informed decisions about future price movements", "It directly controls the price of currencies", "It determines the broker's commission", "It guarantees the success of a trade"],
    correctAnswer: 0,
  },
  {
    question: "What does 'correlation' mean in Forex?",
    options: ["The relationship between two currency pairs", "The distance between two trades", "The number of pips gained", "The spread between bid and ask prices"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'currency pair' in Forex?",
    options: ["Two currencies traded against each other", "A single currency's value", "A financial tool used for hedging", "A market order type"],
    correctAnswer: 0,
  },
  {
    question: "What does 'fundamental analysis' focus on in Forex trading?",
    options: ["Economic, political, and financial factors affecting currency values", "Historical price patterns", "Technical indicators and charts", "The strength of support and resistance levels"],
    correctAnswer: 0,
  },
  {
    question: "What is 'technical analysis' in Forex?",
    options: ["The study of price charts and technical indicators to predict future price movements", "The study of economic news and events", "The prediction of political changes affecting currency prices", "The analysis of long-term trends"],
    correctAnswer: 0,
  },
  {
    question: "What does a 'moving average' indicator do?",
    options: ["It smooths out price data to identify trends", "It measures market volatility", "It calculates the interest rate for a currency", "It shows the support and resistance levels"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the Relative Strength Index (RSI)?",
    options: ["To measure the strength and speed of price movements", "To indicate the price of a currency", "To analyze long-term trends", "To predict the number of trades to execute"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following indicators is commonly used to measure market volatility?",
    options: ["Bollinger Bands", "RSI", "Moving Average", "MACD"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'average true range' (ATR) measure in Forex?",
    options: ["The market volatility", "The strength of a trend", "The price change in one period", "The volume of trades in a market"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'head and shoulders' pattern in Forex?",
    options: ["A reversal pattern signaling the end of a trend", "A continuation pattern signaling trend strength", "A signal for a long position", "A type of candlestick pattern"],
    correctAnswer: 0,
  },
  {
    question: "Which session is known for high liquidity in Forex?",
    options: ["London session", "New York session", "Tokyo session", "Sydney session"],
    correctAnswer: 0,
  },
  {
    question: "What is the importance of news events in Forex trading?",
    options: ["They can cause significant price movements in the market", "They guarantee profits for traders", "They only affect stocks, not currencies", "They have no effect on the Forex market"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'range-bound' market?",
    options: ["A market where the price fluctuates within a specific range", "A market with no volatility", "A market with constant price movement", "A market trending in one direction"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'candlestick pattern' in Forex?",
    options: ["A chart pattern that indicates potential market trends", "A specific type of chart used for technical analysis", "A method for calculating leverage", "A type of risk management strategy"],
    correctAnswer: 0,
  },
  {
    question: "What does 'price action' refer to in Forex trading?",
    options: ["The movement of a currency's price over time", "The spread between the bid and ask price", "The economic factors influencing currency values", "The number of traders in the market"],
    correctAnswer: 0,
  },
  {
    question: "What is 'economic news trading'?",
    options: ["Trading based on economic reports and news releases", "Trading based on technical indicators", "Trading based on moving averages", "Trading during market openings"],
    correctAnswer: 0,
  },
  {
    question: "What does 'volatility' mean in Forex?",
    options: ["The rate at which the price of a currency pair changes", "The amount of liquidity in a market", "The average price of a currency pair", "The spread between bid and ask prices"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'double top' pattern in Forex?",
    options: ["A reversal pattern signaling the end of an uptrend", "A trend-following pattern", "A continuation pattern", "A chart type used for technical analysis"],
    correctAnswer: 0,
  },
  {
    question: "What does 'trade volume' refer to in Forex?",
    options: ["The number of contracts or trades executed in a market", "The level of volatility", "The market liquidity", "The spread between bid and ask prices"],
    correctAnswer: 0,
  },
  {
    question: "What is 'order execution' in Forex trading?",
    options: ["The process of completing a trade order in the market", "The analysis of market trends", "The calculation of profits and losses", "The selection of currency pairs to trade"],
    correctAnswer: 0,
  },
  {
    question: "What does 'market depth' refer to in Forex?",
    options: ["The volume of buy and sell orders at different price levels", "The spread between the bid and ask prices", "The historical price of a currency", "The volatility of a currency pair"],
    correctAnswer: 0,
  },
  {
    question: "What is 'economic data release' in Forex?",
    options: ["A scheduled release of economic data that can affect currency prices", "A type of trading order", "A chart type used for technical analysis", "A risk management strategy"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'consolidation' phase in Forex?",
    options: ["A period when the market moves sideways within a range", "A period of high volatility", "A period of steady price movement", "A period when currency pairs trend strongly"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'currency strength meter' in Forex?",
    options: ["A tool that measures the relative strength of different currencies", "A tool that predicts future currency price movements", "A type of trading strategy", "A market order type"],
    correctAnswer: 0,
  },
  {
    question: "What does 'liquidity' mean in Forex?",
    options: ["The ability to buy or sell assets in the market without significantly affecting the price", "The difference between the bid and ask price", "The number of trades executed", "The number of pips gained"],
    correctAnswer: 0,
  },
  {
    question: "What does 'overbought' mean in Forex technical analysis?",
    options: ["A condition where the market is potentially due for a price correction", "A condition where a currency is in high demand", "A market that is trending upward", "A condition where a currency pair is undervalued"],
    correctAnswer: 0,
  },
  {
    question: "What is 'market sentiment analysis' in Forex?",
    options: ["The study of market psychology and trader behavior to forecast price movements", "The use of economic data for price prediction", "The analysis of moving averages", "The study of long-term market trends"],
    correctAnswer: 0,
  },
  {
    question: "What is 'drawdown' in Forex trading?",
    options: ["The reduction in an account's balance from a peak to a trough", "The number of trades executed", "The level of market volatility", "The difference between bid and ask price"],
    correctAnswer: 0,
  },
  {
    question: "What does 'fundamental analysis' mainly focus on?",
    options: ["Economic and financial factors affecting currency values", "Price charts and technical indicators", "The number of pips traded", "Short-term price movements"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of 'central banks' in Forex?",
    options: ["They influence currency values through monetary policy", "They set the spread between bid and ask prices", "They provide leverage for traders", "They guarantee profits for traders"],
    correctAnswer: 0,
  },
{
    question: "What is a 'stop-limit' order in Forex?",
    options: ["An order that combines a stop order and a limit order", "An order to execute at the market price", "An order that limits losses only", "An order to close a position immediately"],
    correctAnswer: 0,
  },
  {
    question: "What does 'slippage' mean in Forex trading?",
    options: ["The difference between the expected price and the actual price at which a trade is executed", "The act of closing a trade prematurely", "The calculation of profits or losses", "The amount of risk a trader is willing to take"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following best describes a 'trendline' in Forex trading?",
    options: ["A line that connects a series of highs or lows to show the direction of a market", "A tool for measuring market volatility", "A chart pattern that indicates price reversal", "A type of moving average indicator"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'bid price' in Forex?",
    options: ["The price at which a trader can sell a currency pair", "The price at which a trader can buy a currency pair", "The spread between the buy and sell price", "The price that determines market liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'limit order'?",
    options: ["An order placed to buy or sell a currency pair at a specific price or better", "An order to execute at the current market price", "An order to automatically close a position", "An order used only during high volatility periods"],
    correctAnswer: 0,
  },
  {
    question: "What does 'price action' trading focus on?",
    options: ["The study of historical price movements without using indicators", "The use of moving averages", "The use of news releases", "The measurement of market liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Forex market'?",
    options: ["A global decentralized market for buying and selling currencies", "A market for buying and selling stocks", "A marketplace for cryptocurrencies", "A market where only central banks participate"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a common reason for using leverage in Forex?",
    options: ["To control a larger position with a smaller capital", "To reduce the risk of a trade", "To increase the volatility of a currency pair", "To guarantee a profit"],
    correctAnswer: 0,
  },
  {
    question: "What is 'margin call' in Forex trading?",
    options: ["A notification from your broker when your account equity falls below the required margin", "A strategy to increase leverage", "A type of order to limit losses", "A type of trade that guarantees profits"],
    correctAnswer: 0,
  },
  {
    question: "What is 'pipette' in Forex?",
    options: ["A fractional pip, typically 1/10th of a pip", "A full pip", "A type of stop-loss order", "A form of leverage"],
    correctAnswer: 0,
  },
  {
    question: "What does 'NFP' stand for in Forex trading?",
    options: ["Non-Farm Payrolls, a key U.S. economic report", "New Forex Policy", "National Financial Projection", "New Fund Position"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'stochastic oscillator' used for in Forex?",
    options: ["To measure the momentum of a currency pair", "To indicate the strength of a trend", "To predict future price movements", "To calculate profit and loss"],
    correctAnswer: 0,
  },
  {
    question: "What does 'ranging market' refer to?",
    options: ["A market where the price moves within a set range without trending", "A market that moves with high volatility", "A market that trends steadily in one direction", "A market with low liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What does 'liquidity' in the Forex market refer to?",
    options: ["The ability to buy or sell without significantly affecting the price", "The amount of risk a trader is willing to take", "The spread between bid and ask prices", "The number of pips gained in a trade"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'gap' in Forex trading?",
    options: ["A price difference between the closing price of one trading session and the opening price of the next", "A period of no price movement", "A sudden price spike", "A technical indicator"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bull market'?",
    options: ["A market characterized by rising prices", "A market characterized by falling prices", "A market with no price movement", "A market with high volatility"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'carry trade' in Forex?",
    options: ["A strategy that involves borrowing in a low-interest currency and investing in a high-interest currency", "A strategy to close trades quickly", "A strategy to use high leverage", "A strategy to trade news events"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bear market'?",
    options: ["A market characterized by falling prices", "A market characterized by rising prices", "A market with high volatility", "A market with no price movement"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'base currency' in a Forex pair?",
    options: ["The first currency listed in a currency pair", "The second currency listed in a currency pair", "The currency with the higher value", "The currency with the lower value"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'quote currency' in a Forex pair?",
    options: ["The second currency listed in a currency pair", "The first currency listed in a currency pair", "The currency with the higher value", "The currency that is traded the most"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'market order'?",
    options: ["An order to buy or sell a currency pair at the best available price", "An order to buy or sell a currency pair at a specific price", "An order that only executes during market news", "An order to close an existing position"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Fibonacci retracement' tool used for?",
    options: ["To identify potential levels of support and resistance", "To calculate trading volume", "To predict economic data", "To analyze news events"],
    correctAnswer: 0,
  },
  {
    question: "What does 'news trading' refer to?",
    options: ["Trading based on the impact of news releases on currency prices", "Trading based on technical analysis", "Trading based on past price movements", "Trading based on market sentiment"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'moving average convergence divergence' (MACD)?",
    options: ["A momentum indicator that shows the relationship between two moving averages", "A tool to calculate the spread", "A technical indicator used for volatility", "A type of trend-following strategy"],
    correctAnswer: 0,
  },
  {
    question: "What is 'market psychology' in Forex?",
    options: ["The emotions and behaviors of market participants that influence price movements", "The study of economic reports", "The analysis of price patterns", "The study of long-term trends"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'interest rate differential' in Forex trading?",
    options: ["The difference in interest rates between two currencies", "The difference between the bid and ask prices", "The price movement of a currency pair", "The number of trades executed in a market"],
    correctAnswer: 0,
  },
  {
    question: "What is 'churning' in Forex trading?",
    options: ["Excessive trading to generate commissions", "The process of predicting market trends", "The act of placing limit orders", "The act of buying and selling a currency pair at the same price"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'retracement' in Forex?",
    options: ["A temporary reversal in the price movement within a trend", "A sudden price spike", "A market breakout", "A sudden drop in liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Narrow Range Bar' pattern?",
    options: ["A candlestick pattern that indicates a consolidation period", "A candlestick pattern that signals a trend reversal", "A pattern that shows extreme volatility", "A pattern used to measure the market depth"],
    correctAnswer: 0,
  },
  {
    question: "What does 'spread betting' involve in Forex?",
    options: ["Placing bets on the price movement of currency pairs without owning the underlying asset", "Betting on the outcome of economic reports", "Betting on the movement of stock prices", "Betting on the interest rates of central banks"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'fundamental analysis' approach in Forex?",
    options: ["Analyzing economic, financial, and other qualitative data to predict currency price movements", "Using technical indicators to forecast price trends", "Focusing only on price charts", "Studying past market trends"],
    correctAnswer: 0,
  },
  {
    question: "What is 'futures trading' in Forex?",
    options: ["A contract to buy or sell a currency at a future date", "A spot market trade", "Trading based on historical data", "A short-term trading strategy"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'pip' in Forex trading?",
    options: ["The smallest price move that a currency pair can make", "The spread between bid and ask prices", "The amount of margin required", "The leverage used in a trade"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'RSI' indicator measure in Forex?",
    options: ["The strength of a currency's price movement", "The average price of a currency pair", "The volume of a currency traded", "The trend direction of the market"],
    correctAnswer: 0,
  },
  {
    question: "What does 'overbought' mean in the context of the RSI?",
    options: ["The market may be due for a correction or reversal", "The market is trending strongly", "The price is likely to continue moving in the current direction", "The currency is undervalued"],
    correctAnswer: 0,
  },
  {
    question: "What does 'oversold' indicate when using the RSI?",
    options: ["The currency might be due for a price increase", "The currency is likely to continue its current downtrend", "The price is at its highest point", "The market is consolidating"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Bollinger Bands' indicator used for?",
    options: ["To measure volatility and price levels", "To predict the direction of market trends", "To track trading volume", "To signal a currency's overbought or oversold conditions"],
    correctAnswer: 0,
  },
  {
    question: "What does 'a break of support' signify?",
    options: ["A potential price decline", "A price reversal", "A trend continuation", "A market consolidation"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'support level' in Forex?",
    options: ["A price level where demand is strong enough to prevent further price drops", "A price level where selling pressure dominates", "The price level where a currency pair starts to trend", "The point at which an uptrend turns into a downtrend"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'resistance level' in Forex?",
    options: ["A price level where selling pressure is strong enough to prevent price increases", "A price level where buying pressure is strong", "A price at which a currency pair reverses direction", "A market equilibrium point"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary purpose of using 'leverage' in Forex?",
    options: ["To control a large position with a smaller amount of capital", "To increase the risk of a trade", "To reduce trading costs", "To prevent drawdowns"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'drawdown' in Forex trading?",
    options: ["The reduction in account equity from peak to trough", "The number of trades executed in a period", "The maximum profit reached in a trade", "The average cost of executing a trade"],
    correctAnswer: 0,
  },
  {
    question: "What is 'position sizing' in Forex?",
    options: ["Determining the amount of capital to risk on a trade", "Calculating the number of pips gained", "Setting a stop loss level", "Choosing the currency pair to trade"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'currency correlation' in Forex?",
    options: ["The relationship between the movements of different currency pairs", "The price difference between two currencies", "The spread between bid and ask prices", "The volatility of a currency pair"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'fakeout' in Forex?",
    options: ["A false breakout that quickly reverses", "A true breakout that leads to a trend continuation", "A period of low volatility", "A sudden price spike without significant reason"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a 'take-profit' order?",
    options: ["To automatically close a trade when a predefined profit target is reached", "To prevent a position from exceeding the margin", "To guarantee a stop loss level", "To open a trade at the best price available"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'daily range' in Forex?",
    options: ["The difference between the highest and lowest prices during a day", "The total number of pips traded during a day", "The amount of margin required to open a position", "The total volume of a currency pair traded"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Stochastic Oscillator' indicator used for?",
    options: ["To identify overbought or oversold conditions in the market", "To track the price movement of a currency", "To measure the trend strength", "To calculate market liquidity"],
    correctAnswer: 0,
  },
  {
    question: "What does the 'MACD' histogram represent?",
    options: ["The difference between the MACD line and the signal line", "The volume of trades executed", "The strength of a trend", "The price level of support and resistance"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'bullish engulfing' candlestick pattern?",
    options: ["A reversal pattern where a small red candle is followed by a large green candle", "A continuation pattern with two green candles", "A bearish reversal pattern", "A price consolidation pattern"],
    correctAnswer: 0,
  },
  {
    question: "What does 'range-bound market' mean?",
    options: ["A market where price moves within a defined support and resistance level", "A market where prices move in one direction", "A market with high volatility", "A market where prices are constantly rising or falling"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary function of the 'Foreign Exchange Market'?",
    options: ["To facilitate the exchange of currencies between different countries", "To control global inflation", "To set interest rates", "To determine stock prices globally"],
    correctAnswer: 0,
  },
  {
    question: "What does 'divergence' in Forex refer to?",
    options: ["When the price of an asset and an indicator move in opposite directions", "When the price and volume move in the same direction", "When an asset breaks its support level", "When a currency pair consolidates"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'FOMC' in Forex?",
    options: ["The Federal Open Market Committee, which sets U.S. interest rates", "A committee that determines global trade policy", "A group that predicts currency pair movements", "An organization that manages Forex trading platforms"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'U.S. dollar index' (DXY)?",
    options: ["An index that measures the value of the U.S. dollar against a basket of other currencies", "An index that tracks the price of oil", "An index that measures inflation in the U.S.", "An index that tracks U.S. stock market performance"],
    correctAnswer: 0,
  },
  {
    question: "What does 'market depth' refer to in Forex?",
    options: ["The number of buy and sell orders at various price levels", "The number of traders actively participating in the market", "The volatility of a currency pair", "The number of pips gained in a market move"],
    correctAnswer: 0,
  },
  {
    question: "What is 'price slippage'?",
    options: ["The difference between the expected price and the price at which a trade is executed", "The calculation of trading fees", "The number of orders placed at the same price", "A type of market manipulation"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'Harmonic Pattern' in Forex?",
    options: ["A chart pattern that uses Fibonacci numbers to predict market movement", "A price pattern that signals overbought conditions", "A candlestick pattern indicating trend continuation", "A reversal pattern without defined entry points"],
    correctAnswer: 0,
  },
  {
    question: "What does 'price consolidation' indicate?",
    options: ["The market is in a range and could break out in either direction", "The market is trending strongly", "The price will continue in its current direction", "The market is reacting to news events"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'breakout' in Forex trading?",
    options: ["When the price moves beyond a defined support or resistance level", "When the price consolidates at a certain level", "When the market moves sideways", "When the market closes for the day"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'pivot point' in Forex?",
    options: ["The average price level used to identify potential support and resistance levels", "The highest point a currency pair has reached", "The point at which a trend reverses", "A type of candlestick pattern"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'short position' in Forex?",
    options: ["A trade where the trader sells a currency pair with the expectation that its price will fall", "A trade where the trader buys a currency pair expecting price to rise", "A trade with minimal risk", "A trade executed with high leverage"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'ask price' in Forex?",
    options: ["The price at which a trader can buy a currency pair", "The price at which a trader can sell a currency pair", "The price difference between bid and ask", "The market price at a given time"],
    correctAnswer: 0,
  },
  {
    question: "What is the 'spread' in Forex trading?",
    options: ["The difference between the bid and ask prices of a currency pair", "The number of orders placed for a currency pair", "The profit made from a trade", "The margin required to open a position"],
    correctAnswer: 0,
  },
  {
    question: "What does 'risk-to-reward ratio' mean in Forex?",
    options: ["The amount of potential profit compared to the amount of risk taken on a trade", "The number of trades executed", "The percentage of win rates", "The number of pips to be gained in a trade"],
    correctAnswer: 0,
  },
  {
    question: "What is a 'range breakout'?",
    options: ["When the price breaks out of a consolidation range", "A pattern indicating an uptrend", "A point of low liquidity", "A reversal pattern"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary function of 'Forex brokers'?",
    options: ["To provide a platform for trading and execute orders", "To predict currency movements", "To manage risk for traders", "To analyze economic reports"],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let totalQuestionsAnswered = 0;
let questionHistory = [];

function getRandomQuestions() {
  // Randomly shuffle the quizData array and get the first 10 questions
  let shuffledQuestions = [...quizData];
  shuffledQuestions.sort(() => Math.random() - 0.5);
  return shuffledQuestions.slice(0, 10); // Select only 10 random questions
}

let quizQuestions = getRandomQuestions();

function loadQuiz() {
  if (totalQuestionsAnswered < 10) {
    const currentQuestion = quizQuestions[totalQuestionsAnswered];
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = "";

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = currentQuestion.question;

    const answersElement = document.createElement("div");
    answersElement.classList.add("answers");

    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("label");
      optionElement.innerHTML = `<input type="radio" name="question" value="${index}" /> ${option}`;
      answersElement.appendChild(optionElement);
    });

    quizElement.appendChild(questionElement);
    quizElement.appendChild(answersElement);
  } else {
    showResults();
  }
}

function handleSubmit() {
  const selectedAnswer = document.querySelector('input[type="radio"]:checked');
  if (selectedAnswer) {
    const selectedValue = parseInt(selectedAnswer.value);
    userAnswers.push(selectedValue);
    const currentQuestion = quizQuestions[totalQuestionsAnswered];

    if (selectedValue === currentQuestion.correctAnswer) {
      score++;
    }

    totalQuestionsAnswered++;
    loadQuiz();
  } else {
    alert("Please select an answer.");
  }
}

function showResults() {
  document.getElementById("score").innerText = score;
  document.getElementById("totalQuestions").innerText = totalQuestionsAnswered;
  document.getElementById("result").style.display = "block";

  const answerKey = document.getElementById("answerKey");
  answerKey.innerHTML = "<h3>Answer Key:</h3>";

  quizQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[index] !== undefined ? question.options[userAnswers[index]] : "Not answered";
    const correctAnswer = question.options[question.correctAnswer];
    answerKey.innerHTML += `<p><strong>${question.question}</strong><br>Your answer: ${userAnswer}<br>Correct answer: ${correctAnswer}</p>`;
  });

  // Hide quiz and button after results
  document.getElementById("quiz").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
}

// Initialize quiz
loadQuiz();

// Event listener for submit button
document.getElementById("submitBtn").addEventListener("click", handleSubmit);