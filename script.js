<script>
      const sizeInfo = document.getElementById("sizeInfo");
      const updateSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        sizeInfo.innerHTML = `<h1>Width: ${width} Height: ${height}</h1>`;
      };
      window.addEventListener("resize", updateSize);
      updateSize();
</script>
  