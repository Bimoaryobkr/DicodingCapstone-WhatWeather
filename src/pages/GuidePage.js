function GuidePage() {
    return (
        <section className="container pt-5">
            <div className="ms-5 me-5">
                <h1 className="text-center">Panduan</h1>
                <h4>Temperatur tinggi (Top Temperature)</h4>
                <p>
                    Titik tertinggi suhu akan mencapai siang hari. Ini bisa terjadi kapan saja
                    (yaitu sebelum angin sejuk berubah), dan mungkin hanya untuk waktu yang singkat.
                </p>
                <h4>Temperatur Rendah (Low Temperature)</h4>
                <p>
                    Titik terendah suhu akan tercapai, sebelum jam 9 pagi. Ini biasanya sekitar
                    subuh tapi bisa juga jam 10 malam sebelumnya,atau tepat sebelum waktu reset jam 9 pagi.
                </p>
            </div>
        </section>
    )
}

export default GuidePage;