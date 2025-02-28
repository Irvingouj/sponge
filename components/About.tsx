"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import SectionHeading from "./SectionHeading";

export default function About() {
	const { ref } = useSectionInView("About");
	const t = useTranslations("AboutSection");
	const sectionLan = useTranslations("SectionName");
	const activeLocale = useLocale();

	return (
		<motion.section
			ref={ref}
			className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>{sectionLan("about")}</SectionHeading>
			{activeLocale == "zh" ? (
				// <p>{t("desc")}</p> //这样一段话没法分段
				<div className="flex flex-col gap-2">
					<div>
						<span className="text-xl md:text-2xl font-bold italic">
							大家好!
						</span>{" "}
						<span className="text-xl md:text-2xl font-bold">😘</span>
						我是一个充满激情、热爱学习与探索的人。
					</div>
					<div>
						虽然我的专业是电气工程😰，背景偏向传统工科📟，但我对新兴的技术领域充满了浓厚的兴趣，特别是AI、编程和开发💻等方面。此外，我还怀揣着通过自媒体创作实现自我价值的梦想。尽管还没有正式踏入职场，我已经开始尝试各种不同的角色来丰富自己的经历。从以前喜欢画画到现在热衷于技术探索，我发现自己的兴趣爱好在不断扩展。面对即将毕业的未来，我在努力💪寻找自己的道路，并愿意尝试一切新鲜事物。
					</div>
					<div>
						为了记录自己的成长历程和技术心得，我活跃在个人小号朋友圈(爱发疯，一天好几条😂)、个人微信公众号（芥泥糖：很久没有更新了🙈。）以及B站上（憨憨burg:同样断更），分享关于技术的学习笔记和生活点滴。在这里，我不仅希望能够提升自己，也渴望能与更多志同道合的朋友交流互动，共同进步。虽然梦想着有一天能成为网红，实现一夜暴富🤑，但我也清楚地知道，最重要的是一步一个脚印地坚持下去。
					</div>
					<div>
						除了技术和自媒体，我还拥有网易云音乐合伙人身份（芥泥糖：享受永久VIP待遇😎），平常的娱乐方式首选！总之大量的经历让我学会了从逆境、冲突、失败甚至积极事件中快速恢复的能力。我坚信，坚韧、专注和自信是我最重要的品质之一。
					</div>
					<div>
						无论未来的路有多么不确定，我都坚信，只要保持对生活的热情和对梦想的追求，就一定能够找到属于自己的那片天空。希望每一位朋友都能对未来抱有希望，坚持所爱，勇往直前！🚀🚀🚀
					</div>

					<div>
						目前，我在准备开发一款AI设备。同时在自己的 微信公众号 、
						<a
							className="text-xl md:text-2xl font-bold italic underline"
							href="https://music.163.com/#/user/home?id=7816209974"
							target="_blank"
							rel="noreferrer"
						>
							网易云
						</a>
						和{" "}
						<a
							className="text-xl md:text-2xl font-bold italic underline"
							href="https://space.bilibili.com/1994639130?spm_id_from=333.1007.0.0"
							target="_blank"
							rel="noreferrer"
						>
							b站
						</a>{" "}
						记录技术和生活。
					</div>
				</div>
			) : (
				<>
					<p className="mb-3">
						<span className="text-xl md:text-2xl font-bold italic underline">
							Hello everyone!
						</span>{" "}
						<span className="text-xl md:text-2xl font-bold">😘</span>I am a
						passionate person who loves learning and exploration. Now I am an
						undergraduate majoring in
						<span className="font-medium italic"> electrical engineering</span>{" "}
						<span className="text-xl md:text-2xl font-bold">😰</span>. Although
						my professional background is more traditional engineering📟, I have
						a strong interest in emerging technology fields, especially
						<span className="font-medium italic"> AI, programming </span>
						and
						<span className="font-medium italic"> development</span>. 💻In
						addition, I also cherish the dream of realizing self-value through
						the creation of we-media. Even though I haven&apos;t officially
						entered the work force yet, I&apos;m already trying out different
						roles to enrich my experience💪. From my previous love of drawing to
						my current passion for technological exploration, I find my
						interests are constantly expanding. Facing the future of graduation,
						I am trying to find my own way, and I am willing to try all new
						things.
					</p>

					<p className="mb-3">
						In order to record my growth process and technical experience, I am
						active in the personal small circle of friends (love crazy, several
						a day 😂),
						<span className="font-medium italic">
							{" "}
							personal Wechat public account
						</span>{" "}
						(<span className="font-medium italic"> JieNitang </span>: not
						updated for a long time🙈). And the
						<span className="text-xl md:text-2xl font-bold italic underline">
							<a
								href="https://space.bilibili.com/1994639130?spm_id_from=333.1007.0.0"
								target="_blank"
								rel="noreferrer"
							>
								Bilibili.{" "}
							</a>
						</span>{" "}
						(<span className="font-medium italic"> Hanburg </span>: also
						interrupted), sharing learning notes about technology and life.
						Here, I not only hope to improve myself, but also hope to
						communicate and interact with more like-minded friends and make
						progress together. Although I dream of one day becoming an Internet
						celebrity and achieving overnight wealth🤑 I also know clearly that
						the most important thing is to stick to it step by step.
					</p>

					<p className="mb-3">
						In addition to technology and we media, I also have
						<span className="font-medium italic"> NetEase cloud music</span>{" "}
						partner status (
						<span className="text-xl md:text-2xl font-bold italic underline">
							<a
								href="https://music.163.com/#/user/home?id=7816209974"
								target="_blank"
								rel="noreferrer"
							>
								JieNitang.{" "}
							</a>
						</span>
						: enjoy permanent VIP treatment😎), the usual entertainment
						preferred! In short, a lot of experiences have taught me the ability
						to recover quickly from adversity, conflict, failure and even
						positive events. I firmly believe that tenacity, focus and
						confidence are among my most important qualities.
					</p>

					<p className="mb-3">
						No matter how uncertain the future is, I firmly believe that as long
						as we maintain our passion for life and the pursuit of our dreams,
						we will be able to find our own piece of sky. I hope every friend
						can have hope for the future, insist on love.
						<span className="text-xl md:text-2xl font-bold italic underline">
							Go forward!🚀🚀🚀
						</span>
					</p>
				</>
			)}
		</motion.section>
	);
}
