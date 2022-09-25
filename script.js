const button = document.querySelector("button");

button.addEventListener("click", () =>
{
    Notification.requestPermission().then(perm =>
    {
        console.log('Huhu');

        if (perm === "granted")
        {
            // Text im Konstruktor: Titeltext
            const notification = new Notification("Example Notification",
                {
                    // zusätzlicher Text
                    body: "This is more Text",
                    // Im Hintergrund oder mit Geräuch
                    "silent": false,
                    // Vibration
                    "vibrate": true,
                    // Zusätzliche Daten, nützlich für Events, s.u.
                    "data": { some: "data" },
                    // Mit Tag: Eindeutige Nachricht,
                    // sie erscheint nur einmal, egal wieoft gesendet
                    // Sie wird nur aktualisiert
                    // Ohne Tag: Jedes Senden = eine Nachricht
                    "tag": "XYZABC"

                });

            notification.addEventListener("click", e =>
            {
                alert(e.target.data.some);
            });
        }
    });
});

var interval;
var notification2;
document.addEventListener("visibilitychange", () =>
{
    if (document.visibilityState === "hidden")
    {
        const leaveDate = new Date();
        console.log(interval);

        interval = setInterval(() =>
        {
            notification2 = new Notification("Come back please", {
                body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
                tag: "ComeBack"
            })
        }, 1000);
    }
    else
    {
        console.log('Delete Interval');
        console.log(interval);

        if (interval) clearInterval(interval);
        if (notification2) notification2.close();
    }
});
