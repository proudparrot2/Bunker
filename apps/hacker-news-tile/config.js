window.apps["hacker-news-tile"] = {};
window.apps["hacker-news-tile"]["tile"] = `<div class="box_widget">
	<div>
		<h3>Connection Statistics</h3>
	</div>
	<div>
		<ul class="list">
			<li>Server Status: <span id="server_stat">...</span></li>
			<li>NoGuaridan Shield: <span id="noguard_stat">...</span></li>
			<li>Encrypt/Decrypt Protocols: <span id="crypt_stat">...</span></li>
		</ul>
	</div>
	<script src="apps/conn_stats/tile.js"></script>
</div>`;