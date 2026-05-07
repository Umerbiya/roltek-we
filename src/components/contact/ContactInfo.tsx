"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Address */}
      <div className="flex gap-4 p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-md transition-all">
        <div className="shrink-0 p-3 bg-primary/10 rounded-xl text-primary h-fit">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">RÖLTEK TRADING PLC</h3>
          <p className="text-muted-foreground leading-relaxed">
            PEPSI-GOTERA [OPPOSITE],<br />
            ADDIS-ABABA, ETHIOPIA
          </p>
        </div>
      </div>

      {/* Phones */}
      <div className="flex gap-4 p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-md transition-all">
        <div className="shrink-0 p-3 bg-primary/10 rounded-xl text-primary h-fit">
          <Phone className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Phone Numbers</h3>
          <div className="flex flex-col gap-1.5">
            <a href="tel:+251911870000" className="text-muted-foreground hover:text-primary transition-colors">
              +251 (0)91 187 0000
            </a>
            <a href="tel:+251904972004" className="text-muted-foreground hover:text-primary transition-colors">
              +251 (0)90 497 2004
            </a>
          </div>
        </div>
      </div>

      {/* Emails */}
      <div className="flex gap-4 p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-md transition-all">
        <div className="shrink-0 p-3 bg-primary/10 rounded-xl text-primary h-fit">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Email Addresses</h3>
          <div className="flex flex-col gap-1.5 break-all">
            <a href="mailto:abdulfeta@roltek.et" className="text-muted-foreground hover:text-primary transition-colors">
              abdulfeta.jemal@roltek.et
            </a>
            <a href="mailto:bruno@roltek.et" className="text-muted-foreground hover:text-primary transition-colors">
              bruno.rozler@roltek.et
            </a>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="flex gap-4 p-6 rounded-2xl border bg-card hover:border-primary/40 hover:shadow-md transition-all">
        <div className="shrink-0 p-3 bg-primary/10 rounded-xl text-primary h-fit">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">Business Hours</h3>
          <p className="text-muted-foreground">
            Monday - Friday: 8:00 AM - 6:00 PM <br />
            Saturday: 8:00 AM - 1:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
