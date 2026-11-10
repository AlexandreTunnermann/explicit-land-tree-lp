HOW TO COPY: Explicit Land & Tree Services landing page into GHL AI Studio (exact copy)

This replaces AI-STUDIO-BUILD.md. AI Studio does not design anything: it copies the finished build file by file, then only connects the CRM.

1. In AI Studio, create a NEW project (TanStack Start template).

2. Send ONE message. Attach:
   - AI-STUDIO-COPY.md
   - the 17 images from build/website-photos (not PHOTO-DATA.txt, not desktop.ini)
   Type exactly:
Copy this project from the attached file AI-STUDIO-COPY.md. It is a finished, tested build: create every file in it with exactly the content given, character for character, and save the attached images in public/images/ under their exact names. Do not design, rewrite, improve or reformat anything. Read ALL of the file before you start and follow its rules from start to end, in one go. If you can't open the file, stop and tell me.

   If attachments fail: put the 17 images in a PUBLIC Cloud storage bucket "explicit-photos" and AI-STUDIO-COPY.md in a PRIVATE bucket "explicit-build" (never the .md in the public bucket), and say so in the message.

3. Check its first reply starts with: "Read AI-STUDIO-COPY.md: copying 38 files and 17 images exactly."

4. The proof: it must run `node scripts/verify-copy.mjs` and report "OK: all 54 files are identical to the original build."
   If it lists CHANGED or MISSING files, reply: "Copy these files again exactly from AI-STUDIO-COPY.md and re-run the verify script: <the list>".
   Allowed exceptions: only src/lib/geo.ts and src/lib/meta-capi.ts, and only for the validator / import rename the file allows.

5. CRM: it runs "Connect forms to my CRM" and "Re-trigger form integration" itself. If it asks you to type one, type it exactly, then reply: continue
   After the CRM steps, crm-fields.ts, crm-tracking.ts and submit-lead.ts are expected to show as CHANGED in the verify script. That is correct.

6. Compare the AI Studio preview with the original at the same width (phone and desktop). They should look identical.

To change the page later: edit the original repo, run `node scripts/make-ai-studio-copy.mjs`, and send the new AI-STUDIO-COPY.md the same way.
