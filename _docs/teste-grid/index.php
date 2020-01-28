<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Teste GRID</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	
    <link rel="stylesheet" href="grid.css"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.0/jquery-ui.js"></script>
    <script src="js/gridstack.js"></script>
    <script src="js/gridstack.jQueryUI.js"></script>

     <style type="text/css">
        .grid-stack {
            background: lightgoldenrodyellow;
        }

        .grid-stack-item-content {
            color: #2c3e50;
            text-align: center;
            background-color: #18bc9c;
        }
    </style>

    <script type="text/javascript">
		$(function(){

			// DOCUMENTATION
			// https://github.com/gridstack/gridstack.js

			// OPTIONS
			// https://github.com/gridstack/gridstack.js/tree/master/doc#options
	        
	        var options = {
	            animate: true,
	            verticalMargin: 10,
	            float: false
	        };
	        
	        $('.grid-stack').gridstack(options);
	    });
	</script>

</head>
<body>

<div class="grid-stack">
    <div class="grid-stack-item"
        data-gs-x="0" data-gs-y="0"
        data-gs-width="16" data-gs-height="5">
        <div class="grid-stack-item-content">
        	<!-- TradingView Widget BEGIN -->
			<div class="tradingview-widget-container">
				<div id="tradingview_a7516" style="position:absolute; height:calc(100% - 30px); width:100%; bottom:0"></div>
				<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
				<script type="text/javascript">
					new TradingView.widget(
					{
						"autosize": true,
						"symbol": "BINANCE:BTCUSDT",
						"interval": "D",
						"timezone": "Etc/UTC",
						"theme": "Light",
						"style": "1",
						"locale": "br",
						"toolbar_bg": "#f1f3f6",
						"enable_publishing": false,
						"hide_side_toolbar": false,
						"allow_symbol_change": true,
						"container_id": "tradingview_a7516"
						}
					);
				</script>
			</div>
			<!-- TradingView Widget END -->
        </div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="8" data-gs-y="5"
        data-gs-width="4" data-gs-height="4">
            <div class="grid-stack-item-content"></div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="0" data-gs-y="5"
        data-gs-width="4" data-gs-height="2">
            <div class="grid-stack-item-content"></div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="4" data-gs-y="5"
        data-gs-width="4" data-gs-height="4">
            <div class="grid-stack-item-content"></div>
    </div>
    
    <div class="grid-stack-item"
        data-gs-x="0" data-gs-y="5"
        data-gs-width="4" data-gs-height="4">
            <div class="grid-stack-item-content"></div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="4" data-gs-y="10"
        data-gs-width="4" data-gs-height="2">
            <div class="grid-stack-item-content"></div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="4" data-gs-y="10"
        data-gs-width="4" data-gs-height="2">
            <div class="grid-stack-item-content"></div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="8" data-gs-y="10"
        data-gs-width="4" data-gs-height="4">
            <div class="grid-stack-item-content"></div>
    </div>
    
</div>



</body>
</html>