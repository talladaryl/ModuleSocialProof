<script>
// SocialProof Widget Configuration
window.socialProofConfig = {!! json_encode($config) !!};

// Load widget script
(function() {
    var script = document.createElement('script');
    script.src = '{{ asset('vendor/socialproof/js/widget.js') }}';
    script.async = true;
    document.head.appendChild(script);
})();
</script>