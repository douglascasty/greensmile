import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const defaultTeam = [
  {
    name: "Dra. Carolina Mendes",
    specialty: "Implantodontia e Estética",
    cro: "CRO-SP 123456",
    bio: "Especialista em implantes e reabilitação oral, com foco em casos complexos.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
  },
  {
    name: "Dr. Ricardo Alves",
    specialty: "Ortodontia e Invisalign",
    cro: "CRO-SP 654321",
    bio: "Certificado Invisalign Diamond, com mais de 500 casos tratados.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
  },
  {
    name: "Dra. Fernanda Costa",
    specialty: "Harmonização Facial",
    cro: "CRO-SP 789012",
    bio: "Especializada em procedimentos estéticos minimamente invasivos.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
  }
];

export default function TeamSection({ team = [] }) {
  const displayTeam = team.length > 0 ? team.slice(0, 3) : defaultTeam;

  return (
    <section id="equipe" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-4">
            Profissionais que cuidam<br />do seu sorriso
          </h2>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            Equipe multidisciplinar com especialistas formados nas melhores instituições do Brasil.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img
                  src={member.photo || `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80`}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-[#1B4332]">{member.name}</h3>
                  <p className="text-[#2D6A4F] font-medium">{member.specialty}</p>
                  <p className="text-[#1B4332]/50 text-sm mt-1">{member.cro}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4A373]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("Equipe")}>
            <Button
              variant="outline"
              size="lg"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white rounded-full px-8"
            >
              Conhecer toda a equipe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}