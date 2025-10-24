<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Engineering Textbooks | Digital Circuit Design e-Book</title>
  <script src="https://js.braintreegateway.com/web/dropin/1.45.1/js/dropin.js"></script>
  <link rel="stylesheet" href="./auth.css" />
  <style>
    /* 🎨 Improved Aesthetics and Structure 🎨 */
    :root {
      --primary-blue: #007bff; /* Main brand color */
      --secondary-green: #28a745; /* CTA color */
      --text-dark: #222;
      --background-light: #f8f9fa;
      --shadow-subtle: 0 4px 12px rgba(0,0,0,0.08);
    }
    
    body {
      font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
      background-color: var(--background-light);
      color: var(--text-dark);
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    
    header {
      width: 100%;
      background: var(--primary-blue);
      color: white;
      padding: 15px 0;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    header h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    /* Hero Section */
    .hero {
      text-align: center;
      padding: 60px 20px 40px;
      max-width: 800px;
    }
    
    .hero h2 {
      color: var(--primary-blue);
      font-size: 2.5rem;
      margin-bottom: 10px;
      font-weight: 800; /* Bold heading for impact */
    }
    
    .hero p {
      color: #555;
      font-size: 1.15rem;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    /* Product and Checkout Container */
    .product-checkout-container {
      display: flex;
      flex-wrap: wrap; /* Allows stacking on smaller screens */
      gap: 30px;
      padding: 20px;
      width: 90%;
      max-width: 960px;
      margin-bottom: 50px;
    }

    .product-details {
      flex: 2; /* Takes more space for product info */
      background: white;
      border-radius: 12px;
      box-shadow: var(--shadow-subtle);
      padding: 30px;
      text-align: left;
    }

    .book-cover {
      width: 100%;
      min-height: 350px;
      background: url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=60') center/cover;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    .product-details h3 {
      font-size: 1.8rem;
      color: var(--primary-blue);
      margin-top: 0;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    
    .product-details ul {
        list-style: none;
        padding-left: 0;
        margin-top: 15px;
    }

    .product-details ul li {
        padding: 8px 0;
        color: #444;
        border-bottom: 1px dashed #eee;
    }
    
    /* Payment Sidebar */
    .payment-sidebar {
      flex: 1; /* Takes less space for the small form */
      min-width: 300px;
      background: white;
      border-radius: 12px;
      box-shadow: var(--shadow-subtle);
      padding: 30px;
      text-align: center;
    }

    .payment-sidebar h4 {
        color: var(--text-dark);
        font-size: 1.4rem;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .price {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--secondary-green);
        margin-bottom: 20px;
    }

    #dropin-container {
      width: 100%;
      margin: 15px 0;
    }
    
    .button {
      cursor: pointer;
      font-weight: 600;
      text-align: center;
      border: none;
      border-radius: 6px;
      padding: 14px 28px;
      font-size: 1.1rem;
      background-color: var(--secondary-green);
      color: white;
      transition: background 250ms ease, transform 150ms ease;
      width: 100%;
      box-shadow: 0 4px 6px rgba(40, 167, 69, 0.4);
    }
    
    .button:hover {
      background-color: #1e7e34;
      transform: translateY(-2px);
    }
    
    /* Footer */
    footer {
      margin-top: auto;
      width: 100%;
      background: var(--primary-blue);
      color: white;
      text-align: center;
      padding: 20px 0;
      font-size: 0.9rem;
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
        .product-checkout-container {
            flex-direction: column;
        }
        .hero h2 {
            font-size: 2rem;
        }
        .product-details, .payment-sidebar {
            width: 100%;
        }
    }
  </style>
</head>
<body>
  <header>
    <h1>One Piece Books 🎓</h1>
  </header>
  
  <section class="hero">
    <h2>Stop Struggling. Start Building.</h2>
    <p>Welcome to **One Piece Books**, your dedicated resource for engineering education. Get instant digital access to the knowledge you need to ace your next project or exam.</p>
  </section>

  <div class="product-checkout-container">
    
    <section class="product-details">
        <div class="book-cover"></div>
        <h3>Digital Circuit Design: A Student's Guide</h3>
        <p>This essential e-book simplifies complex digital logic. Perfect for **Electrical** and **Computer Engineering** students in their first two years.</p>
        
        <ul>
            <li>✅ **50+** fully solved examples and practice problems.</li>
            <li>✅ Covers **Boolean Algebra, Logic Gates, &amp; Sequential Circuits.**</li>
            <li>✅ Access granted instantly after secure payment.</li>
            <li>✅ Authored by a university professor with **15 years of experience.**</li>
        </ul>
    </section>

    <section class="payment-sidebar">
        <h4>Secure Instant Access</h4>
        <div class="price">$29.99 USD</div>
        
        <div id="dropin-container"></div>
        
        <button id="submit-button" class="button">
            Buy Now & Download
        </button>
        
        <p style="font-size: 0.8rem; color: #777; margin-top: 15px;">Your payment is secured by Braintree/PayPal.</p>
    </section>

  </div>
  
  <footer>
    &copy; 2025 One Piece Books. Your path to engineering excellence.
  </footer>
  
  <script>
    // ⚙️ Braintree Payment Logic ⚙️
    // Token generation is now relative (Vercel API)
    const TOKEN_ENDPOINT = "/api/generate_token"; 
    
    // Nonce submission still uses the Cloudflare tunnel
    const PROCESS_ENDPOINT = "https://handling-impacts-soma-baby.trycloudflare.com/process_payment";

    async function setupBraintree() {
      try {
        // ⚠️ FIX APPLIED HERE: Using the relative path for the Vercel API
        console.log("Attempting to fetch client token from Vercel API:", TOKEN_ENDPOINT);
        const response = await fetch(TOKEN_ENDPOINT);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Token fetch failed with status:", response.status, "Response:", errorText);
            alert(`Failed to get client token from Vercel. Status: ${response.status}. Check console.`);
            return;
        }

        const data = await response.json();

        if (!data.clientToken) {
          console.error("No 'clientToken' field found in response:", data);
          alert("Failed to get client token from server response structure.");
          return;
        }
        
        // --- Drop-in Initialization starts here ---
        braintree.dropin.create({
          authorization: data.clientToken,
          container: "#dropin-container",
        }, function (createErr, instance) {
          if (createErr) {
            console.error("Braintree setup error (Drop-in):", createErr);
            alert("Error setting up payment form. Check console.");
            return;
          }
          
          const button = document.getElementById("submit-button");
          button.addEventListener("click", () => {
            instance.requestPaymentMethod(async (err, payload) => {
              if (err) {
                console.error("Payment method error:", err);
                alert("Payment error. Please check your details.");
                return;
              }
              
              const nonce = payload.nonce;
              console.log("Payment Nonce generated:", nonce);
              
              // --------------------------------------------------------
              // Send the Nonce to your backend for transaction processing
              // --------------------------------------------------------
              try {
                console.log("Sending nonce to Cloudflare endpoint:", PROCESS_ENDPOINT);

                const checkoutResponse = await fetch(PROCESS_ENDPOINT, {
                  method: "POST",
                  headers: { 
                    "Content-Type": "application/json" 
                  },
                  body: JSON.stringify({ 
                    nonce: nonce, 
                    amount: 29.99, 
                    product_id: "DIGI-CIRCUIT-EBOOK-001"
                  })
                });
                
                if (checkoutResponse.ok) {
                    const result = await checkoutResponse.json();
                    alert(`Payment successful! Transaction ID: ${result.transaction_id || 'N/A'}`);
                    console.log("Backend response:", result);
                    // TODO: Implement redirect or download logic here
                } else {
                    const errorResult = await checkoutResponse.json().catch(() => ({ message: checkoutResponse.statusText }));
                    alert(`Payment failed! Reason: ${errorResult.message || checkoutResponse.statusText}. Check console.`);
                    console.error("Payment processing error:", errorResult);
                }
              } catch (error) {
                  console.error("Error communicating with Cloudflare endpoint:", error);
                  alert("Failed to finalize payment. Check backend connection.");
              }
            });
          });
        });
      } catch (error) {
        console.error("Error setting up Braintree (Overall):", error);
        alert("Setup failed — Check console for details about the client token request.");
      }
    }
    setupBraintree();
  </script>
</body>
</html>
