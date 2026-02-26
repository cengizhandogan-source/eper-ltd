"use client"

import { motion } from "framer-motion"

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* International Patient Coordination Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">International Patient Coordination</h3>
            <ul className="space-y-2">
              {[
                "Online evaluation process",
                "Treatment planning coordination",
                "Travel & accommodation assistance",
                "Aftercare organisation",
                "VIP patient management",
              ].map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Surgical Procedures Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
          >
            <h3 className="font-serif text-xl text-foreground mb-4">Surgical Procedures</h3>
            <ul className="space-y-2">
              {[
                "Rhinoplasty",
                "Revision Rhinoplasty",
                "Facelift",
                "Temporal Lift",
              ].map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-xs italic mt-6">
              Surgical procedures are performed by contracted and independent surgeons.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
